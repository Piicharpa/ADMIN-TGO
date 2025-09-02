"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 6086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/primereact/button/button.cjs.js
var button_cjs = __webpack_require__(8176);
// EXTERNAL MODULE: ./node_modules/primereact/column/column.cjs.js
var column_cjs = __webpack_require__(9210);
// EXTERNAL MODULE: ./node_modules/primereact/datatable/datatable.cjs.js
var datatable_cjs = __webpack_require__(4760);
// EXTERNAL MODULE: ./node_modules/primereact/inputtext/inputtext.cjs.js
var inputtext_cjs = __webpack_require__(1785);
// EXTERNAL MODULE: ./node_modules/primereact/toast/toast.cjs.js
var toast_cjs = __webpack_require__(1459);
// EXTERNAL MODULE: ./node_modules/primereact/dialog/dialog.cjs.js
var dialog_cjs = __webpack_require__(6120);
// EXTERNAL MODULE: ./node_modules/primereact/dropdown/dropdown.cjs.js
var dropdown_cjs = __webpack_require__(1042);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.cjs.js
var utils_cjs = __webpack_require__(7666);
;// CONCATENATED MODULE: ./app/(full-page)/component/dialog/industrial.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const AddEditDialog = ({ visible, onHide, onSave, industrial, setIndustrial, submitted, cbamOptions })=>{
    const onInputChange = (e, name)=>{
        const val = e.target.value;
        setIndustrial((prev)=>prev ? {
                ...prev,
                [name]: val
            } : null);
    };
    const onDropdownChange = (e, name)=>{
        const val = e.value;
        setIndustrial((prev)=>prev ? {
                ...prev,
                [name]: val
            } : null);
    };
    const footer = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-end gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                label: "ยกเลิก",
                icon: "pi pi-times",
                outlined: true,
                onClick: onHide
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                label: "บันทึก",
                icon: "pi pi-check",
                onClick: onSave
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog_cjs/* Dialog */.V, {
        visible: visible,
        style: {
            width: "450px"
        },
        header: "รายละเอียดอุตสาหกรรม",
        modal: true,
        className: "p-fluid",
        footer: footer,
        onHide: onHide,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "industrial_name",
                        className: "font-bold",
                        children: "ชื่ออุตสาหกรรม *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "industrial_name",
                        value: industrial?.industrial_name || "",
                        onChange: (e)=>onInputChange(e, "industrial_name"),
                        required: true,
                        autoFocus: true,
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && !industrial?.industrial_name
                        }),
                        placeholder: "กรอกชื่ออุตสาหกรรม"
                    }),
                    submitted && !industrial?.industrial_name && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องกรอกชื่ออุตสาหกรรม"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "required_cbam",
                        className: "font-bold",
                        children: "มี CBAM หรือไม่ *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_cjs.Dropdown, {
                        id: "required_cbam",
                        value: industrial?.required_cbam,
                        options: cbamOptions,
                        onChange: (e)=>onDropdownChange(e, "required_cbam"),
                        optionLabel: "label",
                        optionValue: "value",
                        placeholder: "เลือกสถานะ CBAM",
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && industrial?.required_cbam === undefined
                        })
                    }),
                    submitted && industrial?.required_cbam === undefined && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องเลือกสถานะ CBAM"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dialog_industrial = (AddEditDialog);

// EXTERNAL MODULE: ./app/(full-page)/component/dialog/Delete.tsx
var Delete = __webpack_require__(3448);
;// CONCATENATED MODULE: ./demo/service/IndustrialService.tsx
const API_URL = "http://178.128.123.212:5000/api/v1/admin/industrials";
function mapIndustrial(apiData) {
    return {
        industrial_id: apiData.industrial_id,
        industrial_name: apiData.industrial_name,
        required_cbam: apiData.required_cbam
    };
}
const IndustrialService = {
    getIndustrials () {
        return fetch(API_URL, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then((data)=>data.map(mapIndustrial));
    },
    getIndustrialById (id) {
        return fetch(`${API_URL}/${id}`, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapIndustrial);
    },
    createIndustrial (industrial) {
        return fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(industrial)
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapIndustrial);
    },
    updateUnit (industrial) {
        return fetch(`${API_URL}/${industrial.industrial_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(industrial)
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapIndustrial);
    },
    deleteUnit (id) {
        return fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        }).then((res)=>res.ok ? res.json() : Promise.reject(res));
    }
};

;// CONCATENATED MODULE: ./app/(main)/pages/menu/industrial/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const IndustrialPage = ()=>{
    const [industrials, setIndustrials] = (0,react_.useState)([]);
    const [industrial, setIndustrial] = (0,react_.useState)(null);
    const [selectedIndustrials, setSelectedIndustrials] = (0,react_.useState)(null);
    const [loading, setLoading] = (0,react_.useState)(false);
    const [globalFilter] = (0,react_.useState)("");
    const [nameFilter, setNameFilter] = (0,react_.useState)("");
    const [industrialDialog, setIndustrialDialog] = (0,react_.useState)(false);
    const [deleteIndustrialDialog, setDeleteIndustrialDialog] = (0,react_.useState)(false);
    const [deleteIndustrialsDialog, setDeleteIndustrialsDialog] = (0,react_.useState)(false);
    const [submitted, setSubmitted] = (0,react_.useState)(false);
    const toast = (0,react_.useRef)(null);
    const dt = (0,react_.useRef)(null);
    const hideDeleteIndustrialDialog = ()=>setDeleteIndustrialDialog(false);
    const hideDeleteIndustrialsDialog = ()=>setDeleteIndustrialsDialog(false);
    const emptyIndustrial = {
        industrial_id: 0,
        industrial_name: "",
        required_cbam: 0
    };
    const cbamOptions = [
        {
            label: "มี",
            value: 1
        },
        {
            label: "ไม่มี",
            value: 0
        }
    ];
    (0,react_.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        setLoading(true);
        try {
            const data = await IndustrialService.getIndustrials();
            setIndustrials(data);
        } catch (error) {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "ไม่สามารถโหลดข้อมูลได้",
                life: 3000
            });
        } finally{
            setLoading(false);
        }
    };
    const filteredIndustrials = industrials.filter((industrial)=>industrial.industrial_name?.toLowerCase().includes(nameFilter.toLowerCase()));
    const openNew = ()=>{
        setIndustrial({
            ...emptyIndustrial
        });
        setSubmitted(false);
        setIndustrialDialog(true);
    };
    const hideDialog = ()=>{
        setSubmitted(false);
        setIndustrialDialog(false);
        setIndustrial(null);
    };
    const saveIndustrial = async ()=>{
        setSubmitted(true);
        if (!industrial || !industrial.industrial_name.trim()) return;
        setLoading(true);
        try {
            if (industrial.industrial_id && industrial.industrial_id > 0) {
                // update
                const updated = await IndustrialService.updateUnit(industrial);
                setIndustrials((prev)=>prev.map((i)=>i.industrial_id === updated.industrial_id ? updated : i));
                toast.current?.show({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "แก้ไขข้อมูลแล้ว",
                    life: 3000
                });
            } else {
                // create
                const created = await IndustrialService.createIndustrial(industrial);
                setIndustrials((prev)=>[
                        ...prev,
                        created
                    ]);
                toast.current?.show({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "เพิ่มอุตสาหกรรมแล้ว",
                    life: 3000
                });
            }
            fetchData();
            setIndustrialDialog(false);
            setIndustrial(null);
            setSubmitted(false);
        } catch  {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "เกิดข้อผิดพลาด",
                life: 3000
            });
        } finally{
            setLoading(false);
        }
    };
    const editIndustrial = (i)=>{
        setIndustrial({
            ...i
        });
        setIndustrialDialog(true);
    };
    const confirmDeleteIndustrial = (i)=>{
        setIndustrial(i);
        setDeleteIndustrialDialog(true);
    };
    const deleteIndustrial = async ()=>{
        if (!industrial) return;
        setLoading(true);
        try {
            await IndustrialService.deleteUnit(industrial.industrial_id);
            setIndustrials((prev)=>prev.filter((i)=>i.industrial_id !== industrial.industrial_id));
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบอุตสาหกรรมแล้ว",
                life: 3000
            });
            setIndustrial(null);
            setDeleteIndustrialDialog(false);
        } catch  {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "เกิดข้อผิดพลาด",
                life: 3000
            });
        } finally{
            setLoading(false);
        }
    };
    const deleteSelectedIndustrials = async ()=>{
        if (!selectedIndustrials) return;
        setLoading(true);
        try {
            await Promise.all(selectedIndustrials.map((i)=>IndustrialService.deleteUnit(i.industrial_id)));
            setIndustrials((prev)=>prev.filter((i)=>!selectedIndustrials.includes(i)));
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบรายการที่เลือกแล้ว",
                life: 3000
            });
            setSelectedIndustrials(null);
            setDeleteIndustrialsDialog(false);
        } catch  {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "เกิดข้อผิดพลาด",
                life: 3000
            });
        } finally{
            setLoading(false);
        }
    };
    const actionBodyTemplate = (rowData)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-pencil",
                    rounded: true,
                    severity: "success",
                    onClick: ()=>editIndustrial(rowData),
                    tooltip: "แก้ไข",
                    tooltipOptions: {
                        position: "top"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-trash",
                    rounded: true,
                    severity: "danger",
                    onClick: ()=>confirmDeleteIndustrial(rowData),
                    tooltip: "ลบ",
                    tooltipOptions: {
                        position: "top"
                    }
                })
            ]
        });
    const renderHeader = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "m-0",
                    children: "จัดการอุตสาหกรรม"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-column md:flex-row gap-3 w-full md:w-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "p-input-icon-left mr-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "pi pi-search"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                                    type: "search",
                                    placeholder: "ค้นหาด้วยชื่อ...",
                                    value: nameFilter,
                                    onChange: (e)=>setNameFilter(e.target.value),
                                    className: "w-full"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                            label: "เพิ่มอุตสาหกรรม",
                            icon: "pi pi-plus",
                            severity: "success",
                            onClick: openNew
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card p-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(toast_cjs/* Toast */.F, {
                        ref: toast
                    }),
                    renderHeader(),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(datatable_cjs/* DataTable */.w, {
                        ref: dt,
                        value: filteredIndustrials,
                        selection: selectedIndustrials,
                        onSelectionChange: (e)=>setSelectedIndustrials(e.value),
                        dataKey: "industrial_id",
                        paginator: true,
                        rows: 10,
                        rowsPerPageOptions: [
                            5,
                            10,
                            25
                        ],
                        globalFilter: globalFilter,
                        emptyMessage: "ไม่พบข้อมูล",
                        loading: loading,
                        responsiveLayout: "scroll",
                        className: "mt-4",
                        header: selectedIndustrials && selectedIndustrials.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: `เลือก ${selectedIndustrials.length} รายการ`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                                    label: "ลบที่เลือก",
                                    icon: "pi pi-trash",
                                    severity: "danger",
                                    onClick: ()=>setDeleteIndustrialsDialog(true)
                                })
                            ]
                        }) : null,
                        selectionMode: selectedIndustrials ? "checkbox" : null,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                selectionMode: "multiple",
                                headerStyle: {
                                    width: "3rem"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "index",
                                header: "ลำดับ",
                                body: (_, { rowIndex })=>rowIndex + 1,
                                style: {
                                    width: "100px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "industrial_name",
                                header: "ชื่ออุตสาหกรรม",
                                style: {
                                    width: "200px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "required_cbam",
                                header: "มี CBAM หรือไม่",
                                sortable: true,
                                body: (rowData)=>rowData.required_cbam === 1 ? "มี" : "ไม่มี",
                                style: {
                                    width: "150px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                body: actionBodyTemplate,
                                header: "การดำเนินการ",
                                headerStyle: {
                                    width: "100px"
                                },
                                bodyStyle: {
                                    textAlign: "center"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dialog_industrial, {
                        visible: industrialDialog,
                        onHide: hideDialog,
                        onSave: saveIndustrial,
                        industrial: industrial,
                        setIndustrial: setIndustrial,
                        submitted: submitted,
                        cbamOptions: cbamOptions
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deleteIndustrialDialog,
                        onHide: hideDeleteIndustrialDialog,
                        onConfirm: deleteIndustrial,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${industrial?.industrial_name}?`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deleteIndustrialsDialog,
                        onHide: hideDeleteIndustrialsDialog,
                        onConfirm: deleteSelectedIndustrials,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${selectedIndustrials?.length} รายการที่เลือก?`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const page = (IndustrialPage);


/***/ })

};
;