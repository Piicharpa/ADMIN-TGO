"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata__
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(4664);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata__


const contentType = "image/x-icon"
const buffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEkElEQVRYhbXXW6gVVRgH8N+e5HASkZCoQSKEootE1ENpNRUEpYQVRU9ZUAmV+mCaJmIhYmaRJZKRFVgUXegGXR+y7OJkJiEiZSWiEmKTdBU5yOE408Nacxx3+xzPjvrDZs+e9a1v/dd3+a+1W/4Fkrw4C0twBXqwHY+VWfpR177+xeIXYyO+woU4A0/i6SQvZnXrr9vFe5K8+DHJi2s7jJ2W5MXPMToj99klh3vxbZmlH7YPlFm6D8ux6n8hkORFivviZyisxemdIjQUWh0WGocLMLpt6I747qnj+LwS13cg2o+dZZbu7UggyYsePIZbsBV9DbsJOB+H4+9d0eF47I+2KcZgrNAZB/BNw8eo6GMHZpRZur9+WeO56OCMMksPNogl+BJJK0SgwAZ8h+l4JxJ6Bq9hHlSByMwyS4s2X/djfZIXF5VZ2pfEgQuQYXpz8YhbMbmRq3XxXTtOwS8YgFYgsLxpUGZpWWbpI/gWdzYjcBXeLrP0MJyQFyfhZvxesQJP4A+ciL9wcgcCcCNmRzIDWJjkxcZWSNfBI1n6frR7NUZvTU2gRzCqcQiPY2zc+bz4fgBlfO5t2PcKHTVZyPPoGAV4PtqsRE2gv9583YabMTXJQ7qOZOkANnXY4ahIltDvp8Tnlxq+2runxueN5xsEJR2c9FlkdUttUQ3hpY1MPb93OMPobxskeTFRaNNnBwmUWQpzsCLJi9FJXlwjhPM/QdzMzPhzNZaWWfonjTYss3RLkhcbhFNumlAk44RwTTOCXXbAT3gFn+KlJC9+Ewr42dqgXYoX4R7sjnq/RMjplLiDzSNY9BBeiHNex+2xGB8VCntOmaV1If+DQF3ldUf04Vq8hU1HsvQSnI2H4+7645x+fIzbcCrujoTnCwp50NHirb/RdhYkefGMILdTMbPFUkGg4Fe8LYRzSvxuyvUUvBFJjBe0BVRcjZeFiM7GhWXotKM1ENVwGs7Feqyu2N9geLLQ43twe/y0Y7IgyU+2vV+EtWWWrk3y4johzWuIKYj9vxqLyyw9WAbF2odL2xy9E3cxFM5z7PlS40yhBmAuFsdTd7AGMpyEFxuT5mrLV8TxuqHT+IIyS/ugzNKdQirvaifwfrM6yyz9AWtGIEjDouILoRua+ACTmgQGdA7dMhyoQgHW2DvMev31eMVAFTpqThS6JnrimoMENuCmeCkZRFSrxdhV8W58vUoQl3bsxIxI4gByrCuzdFsH2+n4ZJBAmaVbsUVQqzFtxutaTGyFoqwvo32ODWshXGguw46KB3FpK4R6EElejEry4gGcI4jVMWGfEXe3J8mLbwRFAxU9LWbhe1yO9xx75xsbSfViQiu0YU/FgiQvpkebXuGuuR1X13ePTpfSut+bx2pvi1UVb7aCqvUKmjExjv+Jj/BBxaQWsyoewtcNH8NfSo+HeIx+jnGtkN8Dwq2JkIIXMb8KThceydKVI/E7YgKRxANYNtSk2LLvlll6w4h9dkNAuFbtHWb8sCBgI0ZXBGLh3FbRV6HicOO57vnd3fjsKgU1Yj0sEc6K+u/5ijJLN3Tr629yyXrxwmotcAAAAABJRU5ErkJggg==", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fpiicharpa%2FADMIN-TGO%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!/Users/piicharpa/ADMIN-TGO/app/favicon.ico?__next_metadata__","nextConfigOutput":"export"}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [763,572], () => (__webpack_exec__(4878)));
module.exports = __webpack_exports__;

})();