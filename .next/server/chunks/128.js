exports.id = 128;
exports.ids = [128];
exports.modules = {

/***/ 8108:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4142))

/***/ }),

/***/ 4142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/primereact/hooks/hooks.cjs.js
var hooks_cjs = __webpack_require__(5215);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.cjs.js
var utils_cjs = __webpack_require__(7666);
// EXTERNAL MODULE: ./layout/context/layoutcontext.tsx
var layoutcontext = __webpack_require__(6538);
;// CONCATENATED MODULE: ./layout/AppFooter.tsx
/* eslint-disable @next/next/no-img-element */ 


const AppFooter = ()=>{
    const { layoutConfig } = (0,react_.useContext)(layoutcontext/* LayoutContext */.V);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "layout-footer"
    });
};
/* harmony default export */ const layout_AppFooter = (AppFooter);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/primereact/ripple/ripple.cjs.js
var ripple_cjs = __webpack_require__(6412);
// EXTERNAL MODULE: ./node_modules/react-transition-group/cjs/index.js
var cjs = __webpack_require__(5701);
;// CONCATENATED MODULE: ./layout/context/menucontext.tsx


const MenuContext = /*#__PURE__*/ (0,react_.createContext)({});
const MenuProvider = ({ children })=>{
    const [activeMenu, setActiveMenu] = (0,react_.useState)("");
    const value = {
        activeMenu,
        setActiveMenu
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuContext.Provider, {
        value: value,
        children: children
    });
};

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./layout/AppMenuitem.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const AppMenuitem = (props)=>{
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    const { activeMenu, setActiveMenu } = (0,react_.useContext)(MenuContext);
    const item = props.item;
    const key = props.parentKey ? props.parentKey + "-" + props.index : String(props.index);
    const isActiveRoute = item.to && pathname === item.to;
    const active = activeMenu === key || activeMenu.startsWith(key + "-");
    const onRouteChange = (url)=>{
        if (item.to && item.to === url) {
            setActiveMenu(key);
        }
    };
    (0,react_.useEffect)(()=>{
        onRouteChange(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname,
        searchParams
    ]);
    const itemClick = (event)=>{
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        //execute command
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        // toggle active state
        if (item.items) setActiveMenu(active ? props.parentKey : key);
        else setActiveMenu(key);
    };
    const subMenu = item.items && item.visible !== false && /*#__PURE__*/ jsx_runtime_.jsx(cjs.CSSTransition, {
        timeout: {
            enter: 1000,
            exit: 450
        },
        classNames: "layout-submenu",
        in: props.root ? true : active,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: item.items.map((child, i)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(AppMenuitem, {
                    item: child,
                    index: i,
                    className: child.badgeClass,
                    parentKey: key
                }, child.label);
            })
        })
    }, item.label);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (0,utils_cjs.classNames)({
            "layout-root-menuitem": props.root,
            "active-menuitem": active
        }),
        children: [
            props.root && item.visible !== false && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout-menuitem-root-text",
                children: item.label
            }),
            (!item.to || item.items) && item.visible !== false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: item.url,
                onClick: (e)=>itemClick(e),
                className: (0,utils_cjs.classNames)(item.class, "p-ripple"),
                target: item.target,
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: (0,utils_cjs.classNames)("layout-menuitem-icon", item.icon)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "layout-menuitem-text",
                        children: item.label
                    }),
                    item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "pi pi-fw pi-angle-down layout-submenu-toggler"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ripple_cjs.Ripple, {})
                ]
            }) : null,
            item.to && !item.items && item.visible !== false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: item.to,
                replace: item.replaceUrl,
                target: item.target,
                onClick: (e)=>itemClick(e),
                className: (0,utils_cjs.classNames)(item.class, "p-ripple", {
                    "active-route": isActiveRoute
                }),
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: (0,utils_cjs.classNames)("layout-menuitem-icon", item.icon)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "layout-menuitem-text",
                        children: item.label
                    }),
                    item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "pi pi-fw pi-angle-down layout-submenu-toggler"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ripple_cjs.Ripple, {})
                ]
            }) : null,
            subMenu
        ]
    });
};
/* harmony default export */ const layout_AppMenuitem = (AppMenuitem);

;// CONCATENATED MODULE: ./layout/AppMenu.tsx
/* eslint-disable @next/next/no-img-element */ 




const AppMenu = ()=>{
    const { layoutConfig } = (0,react_.useContext)(layoutcontext/* LayoutContext */.V);
    const model = [
        {
            label: "",
            items: [
                {
                    label: "หน้าหลัก",
                    icon: "pi pi-fw pi-home",
                    to: "/"
                },
                {
                    label: "จัดการข้อมูล",
                    icon: "pi pi-fw pi-list",
                    to: "/pages/menu/manage_info"
                },
                {
                    label: "จัดการผู้ทวนสอบ",
                    icon: "pi pi-fw pi-id-card",
                    to: "/pages/menu/verifier"
                },
                {
                    label: "จัดการผู้ใช้งาน/บริษัท",
                    icon: "pi pi-fw pi-building",
                    to: "/pages/menu/company"
                }
            ]
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "layout-menu",
            children: model.map((item, i)=>{
                return !item?.seperator ? /*#__PURE__*/ jsx_runtime_.jsx(layout_AppMenuitem, {
                    item: item,
                    root: true,
                    index: i
                }, item.label) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "menu-separator"
                });
            })
        })
    });
};
/* harmony default export */ const layout_AppMenu = (AppMenu);

;// CONCATENATED MODULE: ./layout/AppSidebar.tsx


const AppSidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_AppMenu, {});
};
/* harmony default export */ const layout_AppSidebar = (AppSidebar);

;// CONCATENATED MODULE: ./layout/AppTopbar.tsx
/* eslint-disable @next/next/no-img-element */ 




const AppTopbar = /*#__PURE__*/ (0,react_.forwardRef)((props, ref)=>{
    const { onMenuToggle } = (0,react_.useContext)(layoutcontext/* LayoutContext */.V);
    const menubuttonRef = (0,react_.useRef)(null);
    const topbarmenuRef = (0,react_.useRef)(null);
    const topbarmenubuttonRef = (0,react_.useRef)(null);
    const router = (0,navigation.useRouter)();
    (0,react_.useImperativeHandle)(ref, ()=>({
            menubutton: menubuttonRef.current,
            topbarmenu: topbarmenuRef.current,
            topbarmenubutton: topbarmenubuttonRef.current
        }));
    const handleQuit = ()=>{
        router.push("/logout");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-topbar flex items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                className: "layout-topbar-logo",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "ผู้ดูแลระบบ"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                ref: menubuttonRef,
                type: "button",
                className: "p-link layout-menu-button layout-topbar-button ml-4",
                onClick: onMenuToggle,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "pi pi-bars"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ml-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    type: "button",
                    className: "p-link layout-topbar-button",
                    onClick: handleQuit,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "pi pi-sign-out"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "ml-2",
                            children: "Quit"
                        })
                    ]
                })
            })
        ]
    });
});
AppTopbar.displayName = "AppTopbar";
/* harmony default export */ const layout_AppTopbar = (AppTopbar);

// EXTERNAL MODULE: ./node_modules/primereact/api/api.cjs.js
var api_cjs = __webpack_require__(284);
;// CONCATENATED MODULE: ./layout/layout.tsx
/* eslint-disable react-hooks/exhaustive-deps */ /* __next_internal_client_entry_do_not_use__ default auto */ 









const Layout = ({ children })=>{
    const { layoutConfig, layoutState, setLayoutState } = (0,react_.useContext)(layoutcontext/* LayoutContext */.V);
    const { setRipple } = (0,react_.useContext)(api_cjs.PrimeReactContext);
    const topbarRef = (0,react_.useRef)(null);
    const sidebarRef = (0,react_.useRef)(null);
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = (0,hooks_cjs.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(sidebarRef.current?.isSameNode(event.target) || sidebarRef.current?.contains(event.target) || topbarRef.current?.menubutton?.isSameNode(event.target) || topbarRef.current?.menubutton?.contains(event.target));
            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    (0,react_.useEffect)(()=>{
        hideMenu();
        hideProfileMenu();
    }, [
        pathname,
        searchParams
    ]);
    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = (0,hooks_cjs.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(topbarRef.current?.topbarmenu?.isSameNode(event.target) || topbarRef.current?.topbarmenu?.contains(event.target) || topbarRef.current?.topbarmenubutton?.isSameNode(event.target) || topbarRef.current?.topbarmenubutton?.contains(event.target));
            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });
    const hideMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                overlayMenuActive: false,
                staticMenuMobileActive: false,
                menuHoverActive: false
            }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };
    const hideProfileMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: false
            }));
        unbindProfileMenuOutsideClickListener();
    };
    const blockBodyScroll = ()=>{
        if (document.body.classList) {
            document.body.classList.add("blocked-scroll");
        } else {
            document.body.className += " blocked-scroll";
        }
    };
    const unblockBodyScroll = ()=>{
        if (document.body.classList) {
            document.body.classList.remove("blocked-scroll");
        } else {
            document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    };
    (0,react_.useEffect)(()=>{
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }
        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [
        layoutState.overlayMenuActive,
        layoutState.staticMenuMobileActive
    ]);
    (0,react_.useEffect)(()=>{
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [
        layoutState.profileSidebarVisible
    ]);
    (0,hooks_cjs.useUnmountEffect)(()=>{
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });
    const containerClass = (0,utils_cjs.classNames)("layout-wrapper", {
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
        "p-input-filled": layoutConfig.inputStyle === "filled",
        "p-ripple-disabled": !layoutConfig.ripple
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: containerClass,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(layout_AppTopbar, {
                    ref: topbarRef
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: sidebarRef,
                    className: "layout-sidebar",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout_AppSidebar, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "layout-main-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "layout-main",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_AppFooter, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layout-mask"
                })
            ]
        })
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 3781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AppLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./layout/layout.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/piicharpa/ADMIN-TGO/layout/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const layout = (__default__);
;// CONCATENATED MODULE: ./app/(main)/layout.tsx


const metadata = {
    title: "ADMIN TGO",
    description: "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
    robots: {
        index: false,
        follow: false
    },
    viewport: {
        initialScale: 1,
        width: "device-width"
    },
    openGraph: {
        type: "website",
        title: "ADMIN TGO",
        url: "https://sakai.primereact.org/",
        description: "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
        images: [
            "https://www.primefaces.org/static/social/sakai-react.png"
        ],
        ttl: 604800
    },
    icons: {
        icon: "/favicon.ico"
    }
};
function AppLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: children
    });
}


/***/ })

};
;