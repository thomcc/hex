(defproject cells "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir-cljs "0.2.5"]
                 [jayq "0.1.0-alpha2"]
                 [waltz "0.1.0-SNAPSHOT"]
                 [monet "0.1.0-SNAPSHOT"]
                 [fetch "0.1.0-alpha2"]
                 [crate "0.1.0-alpha2"]
                 [noir "1.3.0-alpha10"]]
  :cljsbuild {:builds [{}]}
  :main ^{:skip-aot true} cells.server)
