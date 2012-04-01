(ns hex.views.main
  (:require [hex.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
  (common/layout "[hex]" "hex.css"))
