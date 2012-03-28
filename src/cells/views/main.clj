(ns cells.views.main
  (:require [cells.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
  (common/layout
   [:canvas#canvas {:width 800 :height 600}]))

