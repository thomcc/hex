(ns hex.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]))

(defpartial layout [title css]
  (html5
   [:head
    [:title title]
    (include-css "/css/reset.css")
    (include-css "/css/default.css")
    (include-css (str "/css/" css))]
   [:body (cljs/include-scripts :with-jquery)]))
