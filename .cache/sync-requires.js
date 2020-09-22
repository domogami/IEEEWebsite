// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/domogami/Documents/GitHub/IEEEWebsite/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/domogami/Documents/GitHub/IEEEWebsite/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/domogami/Documents/GitHub/IEEEWebsite/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/domogami/Documents/GitHub/IEEEWebsite/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/json/404.json"),
  "about.json": require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/json/about.json"),
  "index.json": require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/json/index.json"),
  "page-2.json": require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/json/page-2.json"),
  "404-html.json": require("/Users/domogami/Documents/GitHub/IEEEWebsite/.cache/json/404-html.json")
}