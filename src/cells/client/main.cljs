(ns cells.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [waltz.state :as :state]
            [crate.core :as crate])
  (:use [jayq.core :only [$ bind append]])
  (:use-macros [crate.macros :only [defpartial]]))

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

(defn set-fill [ctx col] (set! ctx.fillStyle (colors col)) ctx)
(defn set-stroke [ctx col] (set! ctx.strokeStyle (colors col)) ctx)
(defn stroke [ctx] (.stroke ctx) ctx)
(defn fill [ctx] (.fill ctx) ctx)
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


(def cs (atom (array (array))))
(def cell-size 50)
(def cell-height (* cell-size (Math/sqrt 2.25)))
(def cell-width (* cell-size (Math/sqrt 3)))

(defn update-cells [w h] (swap! cs make-cells (/ w cell-width) (/ h cell-height)))

(defn draw-hex [ctx x y]
  (.beginPath ctx)
  (loop [i 0]
    (when (< i 7)
      (let [a (* (/ Math/PI 180) (- (* i 60) 90)),
            xx (+ x (* cell-size (Math/cos a))),
            yy (+ y (* cell-size (Math/sin a)))]
        (if (== 0 i)
          (.moveTo ctx xx yy)
          (.lineTo ctx xx yy)))
      (recur (inc i))))
  (doto ctx .closePath))

(defn draw-hexs [cvs cls]
  (let [w (.-width cvs), h (.-height cvs), ctx (.getContext cvs "2d"), xhexes (/ w cell-width), yhexes (/ h cell-height)]
    (loop [xx 0]
      (when (>= xhexes xx)
        (loop [yy 0]
          (when (>= yhexes yy)
            (let [val (aget (aget cls yy) xx)]
              (-> ctx
                  (set-fill val)
                  (draw-hex (+ (if (even? yy) 0 (/ cell-width 2)) (* xx cell-width))
                            (* yy cell-height) s)
                  fill
                  stroke
                  ))
            (recur (inc yy))))
        (recur (inc xx))))))

(defn on-resize []
  (let [canvas (.get ($ :#canvas) 0)
        $wind ($ js/window)
        w (.width $wind)
        h (.height $wind)]
    (set! canvas.width w)
    (set! canvas.height h)
    (update-cells w h)
    (draw-hexs canvas @cs)))

;; (defn on-click [e]
;;   (let [$canvas ($ :#canvas)
;;         ex (.getX e)
;;          ey (.getY e)]
;;     ()))

(defn init []
  (bind ($ js/window) :resize on-resize)
  (bind ($ :#canvas) :click on-click)
  (on-resize))


(init)

;(draw-hexs canvas 50)

;(draw-hex ctx 50 50 50)



