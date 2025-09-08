exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 1732:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9027))

/***/ }),

/***/ 3481:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4921, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9068, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8769, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7545, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9985, 23))

/***/ }),

/***/ 9027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4404);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2207);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3799);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8208);
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6822);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3964);
/* harmony import */ var _styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7769);
/* harmony import */ var _styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* __next_internal_client_entry_do_not_use__ default auto */ 








function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    id: "theme-css",
                    href: `/themes/lara-light-indigo/theme.css`,
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_api__WEBPACK_IMPORTED_MODULE_8__.PrimeReactProvider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_1__/* .LayoutProvider */ .a, {
                        children: children
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 4404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ LayoutContext),
/* harmony export */   a: () => (/* binding */ LayoutProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ LayoutContext,LayoutProvider auto */ 

const LayoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const LayoutProvider = ({ children })=>{
    const [layoutConfig, setLayoutConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        ripple: false,
        inputStyle: "outlined",
        menuMode: "static",
        colorScheme: "light",
        theme: "lara-light-indigo",
        scale: 14
    });
    const [layoutState, setLayoutState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });
    const onMenuToggle = ()=>{
        if (isOverlay()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    overlayMenuActive: !prevLayoutState.overlayMenuActive
                }));
        }
        if (isDesktop()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive
                }));
        } else {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive
                }));
        }
    };
    const showProfileSidebar = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: !prevLayoutState.profileSidebarVisible
            }));
    };
    const isOverlay = ()=>{
        return layoutConfig.menuMode === "overlay";
    };
    const isDesktop = ()=>{
        return window.innerWidth > 991;
    };
    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutContext.Provider, {
        value: value,
        children: children
    });
};


/***/ }),

/***/ 246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2061);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/piicharpa/ADMIN-TGO/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7769:
/***/ (() => {



/***/ }),

/***/ 895:
/***/ (() => {



/***/ }),

/***/ 3964:
/***/ (() => {



/***/ })

};
;