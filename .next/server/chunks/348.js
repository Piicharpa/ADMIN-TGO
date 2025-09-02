exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 8076:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9413))

/***/ }),

/***/ 9413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(284);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8176);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3579);
/* harmony import */ var primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3064);
/* harmony import */ var primereact_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3862);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7666);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6538);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const AppConfig = (props)=>{
    const [scales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        12,
        13,
        14,
        15,
        16
    ]);
    const { layoutConfig, setLayoutConfig, layoutState, setLayoutState } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_2__/* .LayoutContext */ .V);
    const { setRipple, changeTheme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(primereact_api__WEBPACK_IMPORTED_MODULE_3__.PrimeReactContext);
    const onConfigButtonClick = ()=>{
        setLayoutState((prevState)=>({
                ...prevState,
                configSidebarVisible: true
            }));
    };
    const onConfigSidebarHide = ()=>{
        setLayoutState((prevState)=>({
                ...prevState,
                configSidebarVisible: false
            }));
    };
    const changeInputStyle = (e)=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                inputStyle: e.value
            }));
    };
    const changeRipple = (e)=>{
        setRipple?.(e.value);
        setLayoutConfig((prevState)=>({
                ...prevState,
                ripple: e.value
            }));
    };
    const changeMenuMode = (e)=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                menuMode: e.value
            }));
    };
    const _changeTheme = (theme, colorScheme)=>{
        changeTheme?.(layoutConfig.theme, theme, "theme-css", ()=>{
            setLayoutConfig((prevState)=>({
                    ...prevState,
                    theme,
                    colorScheme
                }));
        });
    };
    const decrementScale = ()=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                scale: prevState.scale - 1
            }));
    };
    const incrementScale = ()=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                scale: prevState.scale + 1
            }));
    };
    const applyScale = ()=>{
        document.documentElement.style.fontSize = layoutConfig.scale + "px";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        applyScale();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        layoutConfig.scale
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "layout-config-button config-link",
                type: "button",
                onClick: onConfigButtonClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "pi pi-cog"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_sidebar__WEBPACK_IMPORTED_MODULE_4__/* .Sidebar */ .Y, {
                visible: layoutState.configSidebarVisible,
                onHide: onConfigSidebarHide,
                position: "right",
                className: "layout-config-sidebar w-20rem",
                children: [
                    !props.simple && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Scale"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex align-items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        icon: "pi pi-minus",
                                        type: "button",
                                        onClick: decrementScale,
                                        rounded: true,
                                        text: true,
                                        className: "w-2rem h-2rem mr-2",
                                        disabled: layoutConfig.scale === scales[0]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex gap-2 align-items-center",
                                        children: scales.map((item)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)("pi pi-circle-fill", {
                                                    "text-primary-500": item === layoutConfig.scale,
                                                    "text-300": item !== layoutConfig.scale
                                                })
                                            }, item);
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        icon: "pi pi-plus",
                                        type: "button",
                                        onClick: incrementScale,
                                        rounded: true,
                                        text: true,
                                        className: "w-2rem h-2rem ml-2",
                                        disabled: layoutConfig.scale === scales[scales.length - 1]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Menu Type"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "field-radiobutton flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__/* .RadioButton */ .E, {
                                                name: "menuMode",
                                                value: "static",
                                                checked: layoutConfig.menuMode === "static",
                                                onChange: (e)=>changeMenuMode(e),
                                                inputId: "mode1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "mode1",
                                                children: "Static"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "field-radiobutton flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__/* .RadioButton */ .E, {
                                                name: "menuMode",
                                                value: "overlay",
                                                checked: layoutConfig.menuMode === "overlay",
                                                onChange: (e)=>changeMenuMode(e),
                                                inputId: "mode2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "mode2",
                                                children: "Overlay"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Input Style"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "field-radiobutton flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__/* .RadioButton */ .E, {
                                                name: "inputStyle",
                                                value: "outlined",
                                                checked: layoutConfig.inputStyle === "outlined",
                                                onChange: (e)=>changeInputStyle(e),
                                                inputId: "outlined_input"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "outlined_input",
                                                children: "Outlined"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "field-radiobutton flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__/* .RadioButton */ .E, {
                                                name: "inputStyle",
                                                value: "filled",
                                                checked: layoutConfig.inputStyle === "filled",
                                                onChange: (e)=>changeInputStyle(e),
                                                inputId: "filled_input"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "filled_input",
                                                children: "Filled"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Ripple Effect"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_8__/* .InputSwitch */ .Q, {
                                checked: layoutConfig.ripple,
                                onChange: (e)=>changeRipple(e)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "PrimeOne Design"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("lara-light-indigo", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/lara-light-indigo.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("lara-light-blue", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/lara-light-blue.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Light Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("lara-light-purple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/lara-light-purple.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Light Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("lara-light-teal", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/lara-light-teal.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Light Teal"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("lara-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/lara-dark-indigo.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("lara-dark-blue", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/lara-dark-blue.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Dark Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("lara-dark-purple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/lara-dark-purple.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Dark Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("lara-dark-teal", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/lara-dark-teal.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Lara Dark Teal"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("soho-light", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/soho-light.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Soho Light"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("soho-dark", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/soho-dark.png",
                                        className: "w-2rem h-2rem",
                                        alt: "Soho Dark"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("viva-light", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/viva-light.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Viva Light"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("viva-dark", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/viva-dark.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Viva Dark"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Bootstrap"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("bootstrap4-light-blue", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/bootstrap4-light-blue.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Bootstrap Light Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("bootstrap4-light-purple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/bootstrap4-light-purple.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Bootstrap Light Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("bootstrap4-dark-blue", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/bootstrap4-dark-blue.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Bootstrap Dark Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("bootstrap4-dark-purple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/bootstrap4-dark-purple.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Bootstrap Dark Purple"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Material Design"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("md-light-indigo", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/md-light-indigo.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Material Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("md-light-deeppurple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/md-light-deeppurple.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Material Light DeepPurple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("md-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/md-dark-indigo.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Material Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("md-dark-deeppurple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/md-dark-deeppurple.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Material Dark DeepPurple"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Material Design Compact"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("mdc-light-indigo", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/md-light-indigo.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Material Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("mdc-light-deeppurple", "light"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/md-light-deeppurple.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Material Light Deep Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("mdc-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/md-dark-indigo.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Material Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-link w-2rem h-2rem",
                                    onClick: ()=>_changeTheme("mdc-dark-deeppurple", "dark"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/layout/images/themes/md-dark-deeppurple.svg",
                                        className: "w-2rem h-2rem",
                                        alt: "Material Dark Deep Purple"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppConfig);


/***/ }),

/***/ 1318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SimpleLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./app/(full-page)/layout/AppConfig.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/piicharpa/ADMIN-TGO/app/(full-page)/layout/AppConfig.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const AppConfig = (__default__);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
;// CONCATENATED MODULE: ./app/(full-page)/layout.tsx



const metadata = {
    title: "PrimeReact Sakai",
    description: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
};
function SimpleLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_shared_subset.Fragment, {
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(AppConfig, {
                simple: true
            })
        ]
    });
}


/***/ })

};
;