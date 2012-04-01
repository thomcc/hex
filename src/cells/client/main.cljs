(ns cells.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.string :as string]
            [monet.canvas :as c])
  (:use [jayq.core :only [$ append trigger text attr]]
        [crate.core :only [html]]))

(watcher/init)

(set! *print-fn* #(.log js/console %))
(def colors {:off "hsl(0, 0%, 27%)", :on "hsl(60,70%,45%)"})

;; hexagon math

(def h-rad 30)
(def h-wid (* h-rad 2))
(def h-hei (Math/floor (* h-rad (Math/sqrt 3))))
(def h-side (* 1.5 h-rad))

(defn get-corners [[x y]]
  (map (fn [[cx cy]] [(+ x cx) (+ y cy)])
       [[(/ h-rad 2) 0] [h-side 0]          [h-wid  (/ h-hei 2)]
        [h-side h-hei]  [(/ h-rad 2) h-hei] [0 (/ h-hei 2)]]))

(defn neighbors [[i j]]
  (map (fn [neighbor]
         (let [[n-dx n-dys] ([[0 [-1 -1]] [+1 [-1 0]] [+1 [0 +1]] [0 [+1 +1]] [-1 [0 +1]] [-1 [-1 0]]] neighbor)]
           [(+ i n-dx) (+ j (n-dys (mod i 2)))]))
       (range 6)))

(defn hex-loc [i j] [(* i h-side), (* h-hei (/ (+ (* 2 j) (mod i 2)) 2))])

(defn hex-at [x y]
  (let [ci (Math/floor (/ x h-side)), cx (- x (* h-side ci)), ty (- y (* (mod ci 2) (/ h-hei 2)))
        cj (Math/floor (/ ty h-hei)), cy (- ty (* h-hei cj))]
    (if (> cx (* h-rad (Math/abs (- 0.5 (/ cy h-hei))))) [ci, cj]
        [(dec ci), (+ cj (- (mod ci 2) (if (< cy (/ h-hei 2)) 1 0)))])))

;; drawing

(defn draw [canvas living]
  (let [context (c/get-context canvas :2d)]
    (dotimes [j (/ canvas.height h-hei)]
      (dotimes [i (/ canvas.width h-rad)]
        (let [[[startx starty] & cs] (get-corners (hex-loc i j))]
          (-> context c/begin-path (c/move-to startx starty))
          (doseq [[cx cy] cs] (c/line-to context cx cy))
          (-> context c/close-path c/stroke (c/fill-style (colors (if (living [i j]) :on :off))) c/fill))))))

(def rules (atom {:alive [false true false false true false], :dead [false true false false false false]}))
(defn rule [num alive?] (get-in @rules [(if alive? :alive :dead) (dec num)]))

(-> ($ :body)
    (append (html [:div#wrap
                   [:div#control (map (fn [which]
                                        [:ul [:li.head (string/capitalize (name which))]
                                         (map (fn [n] [(if (rule n (= which :alive)) :li.num.active :li.num)
                                                       {:data-num n :data-status (name which)}
                                                       (str n)])
                                              (range 1 7))])
                                      [:alive :dead])
                    [:ul.command (map (fn [cmd] [:li {:data-action (name cmd)} (string/capitalize (name cmd))])
                                      [:run :step :randomize :clear])]]
                   [:canvas#canvas]])))

;; cellular automata

(defn okay? [[x y] w h] (not (or (neg? x) (neg? y) (> x w) (> y h))))

(defn step [cm rule w h]
  (set (for [[loc n] (frequencies (mapcat neighbors cm))
             :when (and (okay? loc w h) (rule n (cm loc)))]
         loc)))

(def running (atom false))
(def living (atom #{}))

(def $canvas ($ :#canvas))
(def canvas (.get $canvas 0))
(def $window ($ js/window))

(defn wait [ms func] (js* "setTimeout(~{func}, ~{ms})"))
(defn run [] (when @running (tick) (wait 200 run)))
(defn start [] (reset! running true) (run))
(defn stop [] (reset! running false))

(defn tick []
  (swap! living step rule (/ canvas.width h-rad) (/ canvas.height h-hei))
  (draw canvas @living))

(defmulti clicked (fn [$this _] (keyword (attr $this :data-action))))
(defmethod clicked :step [_ _] (tick))
(defmethod clicked :clear [_ _] (reset! living #{}) (draw canvas @living))

(defmethod clicked :randomize [_ _]
  (reset! living #{})
  (dotimes [j (Math/floor (/ (.height $window) h-hei))]
    (dotimes [i (Math/floor (/ (.width $window) h-rad))]
      (when (zero? (rand-int 2))
        (swap! living conj [i j]))))
  (draw canvas @living))

(defmethod clicked :run [$this _]
  (let [active? (.hasClass $this "active")]
    (-> (.toggleClass $this "active")
        (text (if active? "Run" "Stop")))
    (if-not active? (start) (stop))))

(.on $canvas "mousedown"
     #(let [change (if (@living (hex-at (.-pageX %) (.-pageY %))) disj conj)
            dragged (atom #{})
            on-drag (fn [e] (let [c (hex-at (.-pageX e) (.-pageY e))]
                       (when-not (@dragged c)
                         (swap! dragged conj c)
                         (swap! living change c)
                         (draw canvas @living))))]
        (on-drag %)
        (.on $canvas "mousemove" on-drag)))

(.on $canvas "mouseup" #(.off $canvas "mousemove"))

(.on $window "resize"
     (fn [e]
       (.preventDefault e)
       (set! canvas.width (.width $window))
       (set! canvas.height (.height $window))
       (draw canvas @living)))

(.on ($ "[data-action]") "click" (fn [e] (this-as this (.preventDefault e) (clicked ($ this) e))))

(.on ($ :.num) "click"
     (fn [e] (this-as this
                      (let [$this ($ this), num (attr $this :data-num), status (attr $this :data-status)]
                        (.preventDefault e)
                        (.toggleClass $this "active")
                        (swap! rules update-in [(keyword status) (dec num)] not)))))

(trigger $window :resize)




