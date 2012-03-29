(ns cells.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [monet.canvas :as canvas]
            [waltz.state :as state]
            [crate.core :as crate])
  (:use [jayq.core :only [$ bind append document-ready]])
  (:use-macros [crate.macros :only [defpartial]]
               [waltz.macros :only [in out defstate deftrans]]))

;;************************************************
;; Dev stuff
;;************************************************

(watcher/init)
;;(repl/connect "http://localhost:9000/repl")

;;************************************************
;; Code
;;************************************************


(def colors {:off "hsl(0, 0%, 27%)", :on "hsl(60,70%,45%)", :or "hsl(0,70%,45%)",
             :xor "hsl(120,70%,45%)", :line "black"})

(set! *print-fn* (fn [& args] (dorun (map #(.log js/console %) args))))

(defn make-cells
  ([w h] (make-cells (array (array)) w h))
  ([a w h] 
     (let [ah (count a), aw (if (> ah 0) (count (aget a 0)) 0)]
       (if (and (== ah h) (== aw w)) a
           (let [ary (array)]
             (loop [y 0]
               (when (< y h)
                 (let [row (array)]
                   (loop [x 0]
                     (when (< x w)
                       (let [item (if (and (< y ah) (< x aw)) (aget (aget a y) x) :off)]
                         (aset row x item)
                         (recur (inc x)))))
                   (aset ary y row)
                   (recur (inc y)))))
             ary)))))


(def cell-radius 40)

(def cell-width (* cell-radius 2))
(def cell-height (Math/floor (* cell-radius (Math/sqrt 3))))

(def cell-side (* (/ 3 2) cell-radius))

(def corner-dx [(/ cell-radius 2), cell-side cell-width cell-side (/ cell-radius 2) 0])
(def corner-dy [0 0 (/ cell-height 2) cell-height cell-height (/ cell-height 2)])

(def neighbor-di [0 1 1 0 -1 -1])
(def neighbor-dj [[-1 -1 0 1 0 -1] [-1 0 1 1 1 0]])

(defn get-cell-pos [i j] [(* i cell-side) (* cell-height (/ (+ (* 2 j) (mod i 2)) 2))])
(defn get-corners [x y] (map (fn [cx cy] [(+ x cx) (+ y cy)]) corner-dx corner-dy))

(defn get-cell-index [x y]
  (let [ci (Math/floor (/ x cell-side))
        cx (- x (* cell-side ci))
        ty (- y (* (mod ci 2) (/ cell-height 2)))
        cj (Math/floor (/ ty cell-height))
        cy (- ty (* height cj))]
    (if-not (> cx (Math/abs (- (/ cell-radius 2) (* cell-radius (/ cy cell-height))))) [ci cj]
            [(dec ci), (+ cj (- (mod ci 2) (if (< cy (/ cell-height 2)) 0 1)))])))

(defn draw-cell [ctx i j fill-col]
  (let [[x y] (get-cell-pos i j), [[cx cy] & cs :as c] (get-corners x y)]
    (-> ctx canvas/begin-path (canvas/move-to cx cy))
;    (doto ctx .beginPath (.moveTo cx cy))
    (doseq [[cx cy] cs]; (. ctx (lineTo cx cy))
      (canvas/line-to ctx cx cy))
    (-> ctx canvas/close-path canvas/stroke (canvas/fill-style fill-col) canvas/fill)
    ))

(defn draw-hexes [canvas cls]
;  (.log js/console (get canvas 0))
  (let [ctx (canvas/get-context canvas :2d)
        hei (.-length cls)
        wid (.-length (aget cls 0))]
    (loop [j 0]
      (when (< j hei)
        (loop [i 0]
          (when (< i wid)
            (draw-cell ctx i j (colors (aget (aget cls j) i)))
            (recur (inc i))))
        (recur (inc j))))))

(defn init []
  (let [$canvas ($ :#canvas)
        canvas (.get $canvas 0)
        cls (atom (array (array)))
        $window ($ js/window)
        
        update-cells (fn [w h] (swap! cls make-cells (/ w cell-height) (/ h cell-height)))
        
        on-move (fn [e] (let [px (.-pageX e), py (.-pageY e), [i j] (get-cell-index px py), cur (aget (aget @cls j) i)]
                          (aset (aget @cls j) i (if (= :on cur) :off :on))
                          (draw-hexes canvas @cls)))
        
        on-resize (fn [_] (let [w (.width $window), h (.height $window)]
                            (set! canvas.width w)
                            (set! canvas.height h)
                            (update-cells w h)
                            (draw-hexes canvas @cls)))]
    
    (bind ($ js/window) :resize on-resize)
    (bind $canvas :mousedown (fn [e] (bind $canvas :mousemove on-move)))
    (bind $canvas :mouseup (fn [e] (.unbind $canvas :mousemove)))
    (on-resize nil)))


(js/$ init)






