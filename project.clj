(defproject hex "0.1.0-SNAPSHOT"
  :description "hexagonal cellular automata in cljs"
  :plugins [[lein-cljsbuild "0.1.3"]]
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir-cljs "0.2.5"]
                 [jayq "0.1.0-alpha3"]
                 [monet "0.1.0-SNAPSHOT"]
                 [crate "0.1.0-alpha2"]
                 [noir "1.3.0-alpha10"]]
  :cljsbuild {:builds [{}]}
  :main ^{:skip-aot true} hex.server)
