(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{222:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"meilisearch-binary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meilisearch-binary"}},[t._v("#")]),t._v(" MeiliSearch Binary")]),t._v(" "),e("h2",{attrs:{id:"downloading-from-curl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#downloading-from-curl"}},[t._v("#")]),t._v(" Downloading from Curl")]),t._v(" "),e("p",[t._v("This script will download the "),e("strong",[t._v("latest stable release")]),t._v(" of MeiliSearch.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://install.meilisearch.com "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n$ ./meilisearch\nServer is listening on: http://127.0.0.1:7700\n")])])]),e("h2",{attrs:{id:"compiling-from-source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compiling-from-source"}},[t._v("#")]),t._v(" Compiling from source")]),t._v(" "),e("p",[t._v("MeiliSearch is made in "),e("code",[t._v("Rust")]),t._v(". Therefore the Rust toolchain must "),e("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("be installed"),e("OutboundLink")],1),t._v(" to compile the project.")]),t._v(" "),e("p",[t._v("If you have the Rust toolchain already installed, you need to clone the repository and go to the cloned directory.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/meilisearch/MeiliSearch\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" MeiliSearch\n")])])]),e("p",[t._v("Inside the folder, compile MeiliSearch.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Production version")]),t._v("\ncargo build --release\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Debug version")]),t._v("\ncargo build\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Compiling in release mode is longer than in debug mode but the binary will be significantly faster. You "),e("strong",[t._v("must")]),t._v(" run a release binary when using MeiliSearch in production.")])]),t._v(" "),e("p",[t._v("You can find the compiled binary in "),e("code",[t._v("target/debug")]),t._v(" or "),e("code",[t._v("target/release")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Excuting the server binary")]),t._v("\n./target/release/meilisearch\n")])])]),e("h2",{attrs:{id:"running-with-docker-🐳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-with-docker-🐳"}},[t._v("#")]),t._v(" Running with Docker 🐳")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("latest")]),t._v(" docker image is built against each commit on the master branch. You can also run any specific version if you specify the specific tag.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker run -it --rm -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7700")]),t._v(":7700 getmeili/meilisearch:latest\nServer is listening on: http://0.0.0.0:7700\n")])])]),e("h2",{attrs:{id:"running-on-heroku"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-on-heroku"}},[t._v("#")]),t._v(" Running on Heroku")]),t._v(" "),e("p",[t._v("You can deploy the latest stable build of MeiliSearch straight on Heroku.")]),t._v(" "),e("p",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://heroku.com/deploy?template=https://github.com/meilisearch/MeiliSearch"}},[e("img",{attrs:{src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy"}})])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The deploy can take up to 20 minutes because it will compile the whole project from the GitHub repository.")])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ./meilisearch --help\nUSAGE:\n    meilisearch "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nFLAGS:\n    -h, --help       Prints "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --api-key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("api-key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              The master key allowing you to "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" everything on the server. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("env:\n                                         "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MEILI_API_KEY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        --db-path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("db-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              The destination where the database must be created. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("env: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MEILI_DB_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: ./data.ms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        --http-addr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http-addr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("          The address on "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" the http server will listen. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("env: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MEILI_HTTP_ADDR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:7700"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        --no-analytics "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("no-analytics"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    Do not send analytics to Meili. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("env: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MEILI_NO_ANALYTICS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h1",{attrs:{id:"environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[t._v("#")]),t._v(" Environment variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Environment Variable")]),t._v(" "),e("th",[t._v("CLI option")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("MEILI_DB_PATH")]),t._v(" "),e("td",[t._v("--db-path")]),t._v(" "),e("td",[t._v("Define the location for the database files")]),t._v(" "),e("td",[t._v('"./data.ms"')])]),t._v(" "),e("tr",[e("td",[t._v("MEILI_HTTP_ADDR")]),t._v(" "),e("td",[t._v("--http-addr")]),t._v(" "),e("td",[t._v("Address and port to listen to")]),t._v(" "),e("td",[t._v('"127.0.0.1:7700"')])]),t._v(" "),e("tr",[e("td",[t._v("MEILI_API_KEY")]),t._v(" "),e("td",[t._v("--api-key")]),t._v(" "),e("td",[t._v("Default admin API key")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("MEILI_NO_ANALYTICS")]),t._v(" "),e("td",[t._v("--no-analytics")]),t._v(" "),e("td",[t._v("Deactivate analytics. Analytics help us to know how much users are using our project, knowing which versions and which platforms are used. It is completely anonymous.")]),t._v(" "),e("td")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);