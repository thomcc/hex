(ns cells.views.main
  (:require [cells.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))



;; (defpage "/" []
;;   (html5
;;    [:head
;;     [:title ""]
;;     (include-css "/css/reset.css")
;;     (include-css "/css/default.css")]

;;    [:body content (cljs/include-scripts :with-jquery)]))

(defpage "/" []
  (common/layout "[hex]" "hex.css"))
