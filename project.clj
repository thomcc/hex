(defproject hex "0.1.1-SNAPSHOT"
  :description "hexagonal cellular automata in cljs"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [jayq "0.1.0-alpha3"]
                 [monet "0.1.0-SNAPSHOT"]
                 [crate "0.1.0-alpha2"]]
  :dev-dependencies [[lein-cljsbuild "0.1.7"]
                     [lein-checkouts "1.0.0"]]
  :extra-classpath-dirs ["checkouts/clojurescript/src/clj" "checkouts/clojurescript/src/cljs"]
  :cljsbuild {:builds {:dev {:source-path "src"
                             :compiler {:optimizations :whitespace
                                        :pretty-print true
                                        :output-to "public/js/main.js"}}
                       :prod {:source-path "src"
                              :compiler {:optimizations :advanced
                                         :externs ["externs/jquery.js"]
                                         :output-to "public/js/main.js"}}}})