(ns cells.views.main
  (:require [cells.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
  (common/layout
   [:div#control
    [:div [:span.head "Next"]
     (map #(vector (if (even? (inc %)) :span.num.active :span.num)
                   {:data-num (inc %)}
                   (str (inc %)))
          (range 6))]
    [:div.go [:span.run "Run"] [:span.step "Step"]]]
   [:canvas#canvas {:width 800 :height 600}]))

