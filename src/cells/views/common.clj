(ns cells.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "cells"]
               (include-css "/css/reset.css")
               (include-css "/css/default.css")]
              [:body content
               (cljs/include-scripts :with-jquery)]))
