(ns cells.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [monet.canvas :as canvas]
            [waltz.state :as state]
            [crate.core :as crate])
  (:use [jayq.core :only [$ append bind trigger]])
  (:use-macros [crate.macros :only [defpartial]]
               [jayq.macros :only [ready]]
               [waltz.macros :only [in out defstate deftrans]]))

(watcher/init)
(set! *print-fn* #(.log js/console %))

(def colors {:off "hsl(0, 0%, 27%)", :on "hsl(60,70%,45%)", :or "hsl(0,70%,45%)", :xor "hsl(120,70%,45%)"})

(defn get-cell [cm i j] (or (cm [i j]) :off)) ; treat nil same as :off

(def next-cell {:off :on, :on :xor, :xor :or, :or :off})

(def cell-radius 40)
(def cell-width (* cell-radius 2))
(def cell-height (Math/floor (* cell-radius (Math/sqrt 3))))
(def cell-side (* 1.5 cell-radius))

(def corner-dx [(/ cell-radius 2), cell-side cell-width cell-side (/ cell-radius 2) 0])
(def corner-dy [0 0 (/ cell-height 2) cell-height cell-height (/ cell-height 2)])
(defn get-corners [x y] (map (fn [cx cy] [(+ x cx) (+ y cy)]) corner-dx corner-dy))

(def neighbor-dx [0 1 1 0 -1 -1])
(def neighbor-dy [[-1 -1] [-1 0] [0 1] [1 1] [0 1] [-1 0]]); [x is even, x is odd]

(defn neighbor [i j n] [(+ i (neighbor-dx n)) (+ j ((neighbor-dy n) (mod i 2)))])
(defn ns-selector [which] (fn [i j] (map #(neighbor i j %) which)))

(def neighbors (ns-selector (range 6)))
(def outputs (ns-selector [0 2 4]))
(def inputs (ns-selector [1 3 5]))

(defn hex-loc [i j] [(* i cell-side) (* cell-height (/ (+ (* 2 j) (mod i 2)) 2))])

(defn hex-at [x y]
  (let [ci (Math/floor (/ x cell-side)),   cx (- x (* cell-side ci)), ty (- y (* (mod ci 2) (/ cell-height 2))),
        cj (Math/floor (/ ty cell-height)) cy (- ty (* cell-height cj))]
    (if (> cx (* cell-radius (Math/abs (- 0.5 (/ cy cell-height))))) [ci cj]
        [(dec ci), (+ cj (- (mod ci 2) (if (< cy (/ cell-height 2)) 1 0)))])))

(defn draw-cell [ctx i j fill-col]
  (let [[x y] (hex-loc i j), [[cx cy] & cs] (get-corners x y)]
    (-> ctx canvas/begin-path (canvas/move-to cx cy))
    (doseq [[cx cy] cs] (canvas/line-to ctx cx cy))
    (-> ctx canvas/close-path canvas/stroke (canvas/fill-style fill-col) canvas/fill)))

(defn draw [canvas cellmap]
  (let [ctx (canvas/get-context canvas :2d)
        hei (/ canvas.height cell-height)
        wid (/ canvas.width cell-height)]
    (loop [j 0]
      (when (< j hei)
        (loop [i 0]
          (when (< i wid)
            (draw-cell ctx i j (colors (get-cell cellmap i j)))
            (recur (inc i))))
        (recur (inc j))))))

(defn toggle-neighbors [cm [i j]]
  (reduce (fn [cm [ni nj :as p]] (assoc cm p (next-cell (get-cell cm ni nj)))) cm (inputs i j)))

(let [$canvas ($ :#canvas), canvas (.get $canvas 0), $window ($ js/window), hexes (atom {})]
  (bind $canvas :click (fn [e] (let [pos (hex-at (.-pageX e) (.-pageY e)),current (apply get-cell @hexes pos)]
                                 (swap! hexes assoc pos (next-cell current))
                                 (swap! hexes toggle-neighbors pos)
                                 (draw canvas @hexes))))
  (bind $window :resize (fn [_] (do (set! canvas.width (.width $window))
                                    (set! canvas.height (.height $window))
                                    (draw canvas @hexes))))
  (trigger $window :resize))
