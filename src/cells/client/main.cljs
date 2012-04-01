(ns cells.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [monet.canvas :as canvas]
;            [waltz.state :as state]
            [crate.core :as crate])
  (:use [jayq.core :only [$ append bind trigger text attr]])
  (:use-macros [crate.macros :only [defpartial]]
               [jayq.macros :only [ready]]
;               [waltz.macros :only [in out defstate deftrans]]
               ))

(repl/connect "http://localhost:9000/repl")
(watcher/init)
(set! *print-fn* #(.log js/console %))

(def colors {:off "hsl(0, 0%, 27%)", :on "hsl(60,70%,45%)"})
(def h-rad 20)
(def h-wid (* h-rad 2))
(def h-hei (Math/floor (* h-rad (Math/sqrt 3))))
(def h-side (* 1.5 h-rad))
(def corner-delta [[(/ h-rad 2) 0] [h-side 0] [h-wid (/ h-hei 2)]
                   [h-side h-hei] [(/ h-rad 2) h-hei] [0 (/ h-hei 2)]])

(defn get-corners [x y] (map (fn [[cx cy]] [(+ x cx) (+ y cy)]) corner-delta))
; n-delta is [x [y if x is even, y if x is odd]]
(def n-delta [[0 [-1 -1]] [1 [-1 0]] [1 [0 1]] [0 [1 1]] [-1 [0 1]] [-1 [-1 0]]])

;; (defn ns-selector [which]
;;   (fn [[i j]] (map #(let [[ndx ndy] (n-delta %)] [(+ i ndx) (+ j (ndy (mod i 2)))]) which)))
;; (def outputs (ns-selector [0 2 4]))
;; (def neighbors (ns-selector (range 6)))
;; (def inputs (ns-selector [1 3 5]))

(defn neighbors [[i j]]
  (map #(let [[ndx ndy] (n-delta %)] [(+ i ndx) (+ j (ndy (mod i 2)))]) (range 6)))

(defn hex-loc [i j] [(* i h-side) (* h-hei (/ (+ (* 2 j) (mod i 2)) 2))])

(defn hex-at [x y]
  (let [ci (Math/floor (/ x h-side))
        cx (- x (* h-side ci))
        ty (- y (* (mod ci 2) (/ h-hei 2)))
        cj (Math/floor (/ ty h-hei))
        cy (- ty (* h-hei cj))]
    (if (> cx (* h-rad (Math/abs (- 0.5 (/ cy h-hei)))))
      [ci cj]
      [(dec ci), (+ cj (- (mod ci 2)
                          (if (< cy (/ h-hei 2)) 1 0)))])))

(defn draw-cell [ctx i j fill-col]
  (let [[x y] (hex-loc i j), [[cx cy] & cs] (get-corners x y)]
    (-> ctx canvas/begin-path (canvas/move-to cx cy))
    (doseq [[cx cy] cs] (canvas/line-to ctx cx cy))
    (-> ctx canvas/close-path canvas/stroke (canvas/fill-style fill-col) canvas/fill)))

(defn draw [canvas hexes]
  (let [ctx (canvas/get-context canvas :2d)
        hei (/ canvas.height h-hei)
        wid (/ canvas.width h-rad)]
    (loop [j 0]
      (when (< j hei)
        (loop [i 0]
          (when (< i wid)
            (draw-cell ctx i j (if (hexes [i j]) (colors :on) (colors :off)))
            (recur (inc i))))
        (recur (inc j))))))

(defn okay? [[x y] w h] (not (or (neg? x) (neg? y) (> x w) (> y h))))

(defn step [cm rule w h] ; needs to take w and h because cljs sets are _slooooow_
  (set (for [[loc n] (frequencies (mapcat neighbors cm))
             :when (and (okay? loc w h) (rule n (cm loc)))]
         loc)))

(def rules (atom [nil false true false true false true]))
(defn rule [num] (get @rules num))

(def hexes (atom #{}))
(def $canvas ($ :#canvas))
(def canvas (.get $canvas 0))
(def $window ($ js/window))

(defn tick []
  (swap! hexes step rule (/ canvas.width h-rad) (/ canvas.height h-hei))
  (draw canvas @hexes))

(bind $canvas :click (fn [e] (let [p (hex-at (.-pageX e) (.-pageY e))]
                               (swap! hexes (if (@hexes p) disj conj) p)
                               (draw canvas @hexes))))

(bind $window :resize
      (fn [_]
        (set! canvas.width (.width $window))
        (set! canvas.height (.height $window))
        (draw canvas @hexes)))

(def running (atom false))
(defn wait [ms func] (js* "setTimeout(~{func}, ~{ms})"))
(defn run [] (when @running (tick) (wait 200 run)))

(bind ($ :span.step) :click tick)

(bind ($ :span.run) :click
      (fn [] (let [$this ($ (js* "this")), active? (.hasClass $this "active")]
               (-> (.toggleClass $this "active") (text (if active? "Run" "Stop")))
               (reset! running (not active?))
               (run))))
(bind ($ :span.num) :click
      (fn [] (let [$this ($ (js* "this")), num (attr $this :data-num)]
               (.toggleClass $this "active")
               (swap! rules update-in [num] not))))


(trigger $window :resize)






