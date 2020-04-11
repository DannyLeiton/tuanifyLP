const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/daniel/Desktop/Airbnb Tuanify/Tuanify Website/tuanifyLP/src/pages/404.js"))),
  "component---src-pages-booklet-js": hot(preferDefault(require("/Users/daniel/Desktop/Airbnb Tuanify/Tuanify Website/tuanifyLP/src/pages/booklet.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/daniel/Desktop/Airbnb Tuanify/Tuanify Website/tuanifyLP/src/pages/index.js"))),
  "component---src-pages-qbo-1410-booklet-js": hot(preferDefault(require("/Users/daniel/Desktop/Airbnb Tuanify/Tuanify Website/tuanifyLP/src/pages/QBO1410/booklet.js"))),
  "component---src-pages-qbo-1410-index-js": hot(preferDefault(require("/Users/daniel/Desktop/Airbnb Tuanify/Tuanify Website/tuanifyLP/src/pages/QBO1410/index.js"))),
  "component---src-pages-urbn-1504-booklet-js": hot(preferDefault(require("/Users/daniel/Desktop/Airbnb Tuanify/Tuanify Website/tuanifyLP/src/pages/URBN1504/booklet.js"))),
  "component---src-pages-urbn-1504-index-js": hot(preferDefault(require("/Users/daniel/Desktop/Airbnb Tuanify/Tuanify Website/tuanifyLP/src/pages/URBN1504/index.js")))
}

