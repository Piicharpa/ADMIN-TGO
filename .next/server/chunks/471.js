"use strict";
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 7471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
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
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/primereact/dialog/dialog.cjs.js
var dialog_cjs = __webpack_require__(6120);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.cjs.js
var utils_cjs = __webpack_require__(7666);
;// CONCATENATED MODULE: ./app/(full-page)/component/dialog/unit.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const AddEditDialog = ({ visible, unit, submitted, onHide, onSave, onChange })=>{
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
            width: "500px"
        },
        header: "รายละเอียดหน่วย",
        modal: true,
        className: "p-fluid",
        footer: footer,
        onHide: onHide,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "font-bold",
                        children: "ชื่อหน่วย (TH) *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        value: unit?.product_unit_name_th || "",
                        onChange: (e)=>onChange(e, "product_unit_name_th"),
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && !unit?.product_unit_name_th
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "font-bold",
                        children: "ชื่อหน่วย (EN) *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        value: unit?.product_unit_name_en || "",
                        onChange: (e)=>onChange(e, "product_unit_name_en"),
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && !unit?.product_unit_name_en
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "font-bold",
                        children: "รหัสย่อ (TH)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        value: unit?.product_unit_abbr_th || "",
                        onChange: (e)=>onChange(e, "product_unit_abbr_th")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "font-bold",
                        children: "รหัสย่อ (EN)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        value: unit?.product_unit_abbr_eng || "",
                        onChange: (e)=>onChange(e, "product_unit_abbr_eng")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dialog_unit = (AddEditDialog);

// EXTERNAL MODULE: ./app/(full-page)/component/dialog/Delete.tsx
var Delete = __webpack_require__(3448);
;// CONCATENATED MODULE: ./demo/service/UnitService.tsx
const API_URL = "http://178.128.123.212:5000/api/v1/admin/units";
function mapUnit(apiData) {
    return {
        product_unit_id: apiData.product_unit_id,
        product_unit_name_th: apiData.product_unit_name_th,
        product_unit_name_en: apiData.product_unit_name_en,
        product_unit_abbr_th: apiData.product_unit_abbr_th,
        product_unit_abbr_eng: apiData.product_unit_abbr_eng
    };
}
const UnitService = {
    getUnits () {
        return fetch(API_URL, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then((data)=>data.map(mapUnit));
    },
    getUnitById (id) {
        return fetch(`${API_URL}/${id}`, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapUnit);
    },
    createUnit (unit) {
        return fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unit)
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapUnit);
    },
    updateUnit (unit) {
        return fetch(`${API_URL}/${unit.product_unit_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unit)
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapUnit);
    },
    deleteUnit (id) {
        return fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        }).then((res)=>res.ok ? res.json() : Promise.reject(res));
    }
};

;// CONCATENATED MODULE: ./app/(main)/pages/menu/unit/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const UnitPage = ()=>{
    const [units, setUnits] = (0,react_.useState)([]);
    const [unit, setUnit] = (0,react_.useState)(null);
    const [selectedUnits, setSelectedUnits] = (0,react_.useState)(null);
    const [loading, setLoading] = (0,react_.useState)(false);
    const [globalFilter, setGlobalFilter] = (0,react_.useState)("");
    const [nameFilter, setNameFilter] = (0,react_.useState)("");
    const [unitDialog, setUnitDialog] = (0,react_.useState)(false);
    const [deleteUnitDialog, setDeleteUnitDialog] = (0,react_.useState)(false);
    const [deleteUnitsDialog, setDeleteUnitsDialog] = (0,react_.useState)(false);
    const [submitted, setSubmitted] = (0,react_.useState)(false);
    const toast = (0,react_.useRef)(null);
    const dt = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        setLoading(true);
        try {
            const data = await UnitService.getUnits();
            setUnits(data);
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
    const filteredUnits = units.filter((unit)=>unit.product_unit_name_th?.toLowerCase().includes(nameFilter.toLowerCase()));
    const openNew = ()=>{
        setUnit({
            product_unit_id: 0,
            product_unit_name_th: "",
            product_unit_name_en: "",
            product_unit_abbr_th: "",
            product_unit_abbr_eng: ""
        });
        setSubmitted(false);
        setUnitDialog(true);
    };
    const hideDialog = ()=>{
        setSubmitted(false);
        setUnitDialog(false);
    };
    const hideDeleteUnitDialog = ()=>setDeleteUnitDialog(false);
    const hideDeleteUnitsDialog = ()=>setDeleteUnitsDialog(false);
    const saveUnit = async ()=>{
        setSubmitted(true);
        if (!unit || !unit.product_unit_name_th.trim()) return;
        setLoading(true);
        try {
            if (unit.product_unit_id && unit.product_unit_id > 0) {
                const updated = await UnitService.updateUnit(unit);
                setUnits(units.map((u)=>u.product_unit_id === updated.product_unit_id ? updated : u));
                toast.current?.show({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "แก้ไขข้อมูลแล้ว",
                    life: 3000
                });
            } else {
                const created = await UnitService.createUnit(unit);
                setUnits([
                    ...units,
                    created
                ]);
                toast.current?.show({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "เพิ่มหน่วยแล้ว",
                    life: 3000
                });
            }
            fetchData();
            setUnitDialog(false);
            setUnit(null);
        } catch (error) {
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
    const editUnit = (u)=>{
        setUnit({
            ...u
        });
        setUnitDialog(true);
    };
    const confirmDeleteUnit = (u)=>{
        setUnit(u);
        setDeleteUnitDialog(true);
    };
    const deleteUnit = async ()=>{
        if (!unit) return;
        setLoading(true);
        try {
            await UnitService.deleteUnit(unit.product_unit_id);
            setUnits(units.filter((u)=>u.product_unit_id !== unit.product_unit_id));
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบข้อมูลแล้ว",
                life: 3000
            });
        } catch (error) {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "เกิดข้อผิดพลาด",
                life: 3000
            });
        } finally{
            setDeleteUnitDialog(false);
            setUnit(null);
            setLoading(false);
        }
    };
    const deleteSelectedUnits = async ()=>{
        if (!selectedUnits) return;
        setLoading(true);
        try {
            await Promise.all(selectedUnits.map((u)=>UnitService.deleteUnit(u.product_unit_id)));
            setUnits(units.filter((u)=>!selectedUnits.includes(u)));
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบข้อมูลที่เลือกแล้ว",
                life: 3000
            });
        } catch  {
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "เกิดข้อผิดพลาด",
                life: 3000
            });
        } finally{
            setDeleteUnitsDialog(false);
            setSelectedUnits(null);
            setLoading(false);
        }
    };
    const onInputChange = (e, name)=>{
        const val = e.target.value;
        setUnit((prev)=>prev ? {
                ...prev,
                [name]: val
            } : null);
    };
    const actionBodyTemplate = (rowData)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-pencil",
                    rounded: true,
                    severity: "success",
                    onClick: ()=>editUnit(rowData),
                    tooltip: "แก้ไข",
                    tooltipOptions: {
                        position: "top"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-trash",
                    rounded: true,
                    severity: "danger",
                    onClick: ()=>confirmDeleteUnit(rowData),
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
                    children: "จัดการหน่วย"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-column md:flex-row gap-3",
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
                            label: "เพิ่มหน่วย",
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
                        value: filteredUnits,
                        selection: selectedUnits,
                        onSelectionChange: (e)=>setSelectedUnits(e.value),
                        dataKey: "product_unit_id",
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
                        header: selectedUnits && selectedUnits.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: `เลือก ${selectedUnits.length} รายการ`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                                    label: "ลบที่เลือก",
                                    icon: "pi pi-trash",
                                    severity: "danger",
                                    onClick: ()=>setDeleteUnitsDialog(true)
                                })
                            ]
                        }) : null,
                        selectionMode: selectedUnits ? "checkbox" : null,
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
                                    width: "200px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "product_unit_name_th",
                                header: "ชื่อหน่วยภาษาไทย",
                                sortable: true,
                                style: {
                                    width: "200px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "product_unit_name_en",
                                header: "ชื่อหน่วยภาษาอังกฤษ",
                                sortable: true,
                                style: {
                                    width: "200px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "product_unit_abbr_th",
                                header: "ชื่อย่อหน่วยภาษาไทย",
                                sortable: true,
                                style: {
                                    width: "200px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "product_unit_abbr_eng",
                                header: "ชื่อย่อหน่วยภาษาอังกฤษ",
                                sortable: true,
                                style: {
                                    width: "200px"
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
                    /*#__PURE__*/ jsx_runtime_.jsx(dialog_unit, {
                        visible: unitDialog,
                        unit: unit,
                        submitted: submitted,
                        onHide: hideDialog,
                        onSave: saveUnit,
                        onChange: onInputChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deleteUnitDialog,
                        onHide: hideDeleteUnitDialog,
                        onConfirm: deleteUnit,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${unit?.product_unit_name_th} รายการที่เลือก?`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deleteUnitsDialog,
                        onHide: hideDeleteUnitsDialog,
                        onConfirm: deleteSelectedUnits,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${selectedUnits?.length} รายการที่เลือก?`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const page = (UnitPage);


/***/ })

};
;