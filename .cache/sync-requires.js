// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/joboy/workspace/meteor/joboyx-site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/joboy/workspace/meteor/joboyx-site/src/pages/index.js")),
  "component---src-pages-page-0-js": preferDefault(require("/home/joboy/workspace/meteor/joboyx-site/src/pages/page-0.js")),
  "component---src-pages-page-1-js": preferDefault(require("/home/joboy/workspace/meteor/joboyx-site/src/pages/page-1.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/joboy/workspace/meteor/joboyx-site/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/layout-index.json"),
  "404.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/404.json"),
  "layout-index.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/layout-index.json"),
  "index.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/index.json"),
  "layout-index.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/layout-index.json"),
  "page-0.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/page-0.json"),
  "layout-index.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/layout-index.json"),
  "page-1.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/page-1.json"),
  "layout-index.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/layout-index.json"),
  "page-2.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/page-2.json"),
  "layout-index.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/layout-index.json"),
  "404-html.json": require("/home/joboy/workspace/meteor/joboyx-site/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/home/joboy/workspace/meteor/joboyx-site/.cache/layouts/index.js"))
}