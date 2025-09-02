"use strict";
exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 611:
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
// EXTERNAL MODULE: ./node_modules/primereact/dialog/dialog.cjs.js
var dialog_cjs = __webpack_require__(6120);
// EXTERNAL MODULE: ./node_modules/primereact/inputtextarea/inputtextarea.cjs.js
var inputtextarea_cjs = __webpack_require__(3285);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.cjs.js
var utils_cjs = __webpack_require__(7666);
// EXTERNAL MODULE: ./node_modules/primereact/dropdown/dropdown.cjs.js
var dropdown_cjs = __webpack_require__(1042);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/(full-page)/component/dialog/ef.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function AddEditDialog({ visible, ef, submitted, onHide, onChange, onSave, tgoCategories, tgoSubcategories, onCategoryChange, onSubcategoryChange }) {
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
    // Filter subcategories based on the selected category
    const filteredSubcategories = ef.tgo_ef_cat_id ? tgoSubcategories?.filter((sub)=>sub.tgo_ef_cat_id === ef.tgo_ef_cat_id) : [];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog_cjs/* Dialog */.V, {
        visible: visible,
        style: {
            width: "500px"
        },
        header: "รายละเอียด EF",
        modal: true,
        className: "p-fluid",
        footer: footer,
        onHide: onHide,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "item",
                        className: "font-bold",
                        children: "รายการ *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "item",
                        value: ef.item,
                        onChange: (e)=>onChange(e, "item"),
                        required: true,
                        autoFocus: true,
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && !ef.item
                        }),
                        placeholder: "กรอกรายการ"
                    }),
                    submitted && !ef.item && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องกรอกรายการ"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "item_detail",
                        className: "font-bold",
                        children: "รายละเอียด"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtextarea_cjs/* InputTextarea */.g, {
                        id: "item_detail",
                        value: ef.item_detail,
                        onChange: (e)=>onChange(e, "item_detail"),
                        rows: 3,
                        placeholder: "กรอกรายละเอียด"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "unit",
                        className: "font-bold",
                        children: "หน่วย"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "unit",
                        value: ef.unit,
                        onChange: (e)=>onChange(e, "unit"),
                        placeholder: "กรอกหน่วย"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "ef",
                        className: "font-bold",
                        children: "ค่า EF"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "ef",
                        value: ef.ef,
                        onChange: (e)=>onChange(e, "ef"),
                        placeholder: "กรอกค่า EF"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "ef_source_ref",
                        className: "font-bold",
                        children: "ที่มา"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "ef_source_ref",
                        value: ef.ef_source_ref,
                        onChange: (e)=>onChange(e, "ef_source_ref"),
                        placeholder: "กรอกที่มา"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "tgo_updated",
                        className: "font-bold",
                        children: "TGO Updated"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "tgo_updated",
                        value: ef.tgo_updated || "",
                        onChange: (e)=>onChange(e, "tgo_updated"),
                        placeholder: "กรอกข้อมูล TGO Updated"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "tgo_ef_cat_name",
                        className: "font-bold",
                        children: "หมวดหมู่หลัก"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_cjs.Dropdown, {
                        id: "tgo_ef_cat_name",
                        value: ef.tgo_ef_cat_id,
                        options: tgoCategories,
                        onChange: onCategoryChange,
                        optionLabel: "tgo_ef_cat_name",
                        optionValue: "tgo_ef_cat_id",
                        placeholder: "เลือกหมวดหมู่หลัก"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "tgo_ef_subcat_name",
                        className: "font-bold",
                        children: "หมวดหมู่ย่อย"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_cjs.Dropdown, {
                        id: "tgo_ef_subcat_name",
                        value: ef.tgo_ef_subcat_id || null,
                        options: filteredSubcategories,
                        onChange: onSubcategoryChange,
                        optionLabel: "tgo_ef_subcat_name",
                        optionValue: "tgo_ef_subcat_id",
                        placeholder: "เลือกหมวดหมู่ย่อย",
                        disabled: !ef.tgo_ef_cat_id
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/(full-page)/component/dialog/Delete.tsx
var Delete = __webpack_require__(3448);
;// CONCATENATED MODULE: ./demo/service/EfService.tsx
const API_URL = "http://178.128.123.212:5000/api/v1/admin";
function mapEf(data) {
    return {
        ef_id: data.ef_id,
        item: data.item,
        item_detail: data.item_detail,
        unit: data.unit,
        ef: data.ef,
        ef_source_ref: data.ef_source_ref,
        tgo_updated: data.tgo_updated,
        tgo_ef_subcat_id: data.tgo_ef_subcat_id,
        created_date: data.created_date,
        updated_date: data.updated_date,
        tgo_ef_cat_name: data.tgo_ef_cat_name,
        tgo_ef_subcat_name: data.tgo_ef_subcat_name,
        tgo_ef_cat_id: data.tgo_ef_cat_id
    };
}
function mapEfCategory(data) {
    return {
        tgo_ef_cat_id: data.tgo_ef_cat_id,
        tgo_ef_cat_name: data.tgo_ef_cat_name,
        created_date: data.created_date,
        updated_date: data.updated_date
    };
}
function mapEfSubcategory(data) {
    return {
        tgo_ef_subcat_id: data.tgo_ef_subcat_id,
        tgo_ef_subcat_name: data.tgo_ef_subcat_name,
        tgo_ef_cat_id: data.tgo_ef_cat_id,
        created_date: data.created_date,
        updated_date: data.updated_date
    };
}
const EfService = {
    // ====== EF ======
    getEfs () {
        return fetch(`${API_URL}/tgoef`, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then((data)=>data.map(mapEf));
    },
    getEfById (id) {
        return fetch(`${API_URL}/tgoef/${id}`, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapEf);
    },
    createEf (ef) {
        return fetch(`${API_URL}/tgoef`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ef)
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapEf);
    },
    updateEf (ef) {
        return fetch(`${API_URL}/tgoef/${ef.ef_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ef)
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then(mapEf);
    },
    deleteEf (id) {
        return fetch(`${API_URL}/tgoef/${id}`, {
            method: "DELETE"
        }).then((res)=>res.ok ? res.json() : Promise.reject(res));
    },
    // ====== CATEGORIES ======
    getCategories () {
        return fetch(`${API_URL}/tgoefcategories`, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then((data)=>data.map(mapEfCategory));
    },
    // ====== SUBCATEGORIES ======
    getSubcategories () {
        return fetch(`${API_URL}/tgoefsubcategories`, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.ok ? res.json() : Promise.reject(res)).then((data)=>data.map(mapEfSubcategory));
    }
};

;// CONCATENATED MODULE: ./app/(main)/pages/menu/ef/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const TGO = ()=>{
    let emptyEf = {
        ef_id: 0,
        item: "",
        item_detail: "",
        unit: "",
        ef: "",
        ef_source_ref: "",
        tgo_updated: "",
        tgo_ef_subcat_id: 0,
        created_date: "",
        updated_date: "",
        tgo_ef_cat_name: "",
        tgo_ef_subcat_name: "",
        tgo_ef_cat_id: 0
    };
    const [efs, setEfs] = (0,react_.useState)([]);
    const [efDialog, setEfDialog] = (0,react_.useState)(false);
    const [deleteEfDialog, setDeleteEfDialog] = (0,react_.useState)(false);
    const [deleteEfsDialog, setDeleteEfsDialog] = (0,react_.useState)(false);
    const [ef, setEf] = (0,react_.useState)(emptyEf);
    const [selectedEfs, setSelectedEfs] = (0,react_.useState)([]);
    const [submitted, setSubmitted] = (0,react_.useState)(false);
    const [globalFilter, setGlobalFilter] = (0,react_.useState)("");
    const [nameFilter, setNameFilter] = (0,react_.useState)("");
    const [loading, setLoading] = (0,react_.useState)(false);
    const [tgoCategories, setTgoCategories] = (0,react_.useState)([]);
    const [tgoSubcategories, setTgoSubcategories] = (0,react_.useState)([]);
    const toast = (0,react_.useRef)(null);
    const hideDeleteEfDialog = ()=>setDeleteEfDialog(false);
    const hideDeleteEfsDialog = ()=>setDeleteEfsDialog(false);
    const dt = (0,react_.useRef)(null);
    const fetchEfs = ()=>{
        setLoading(true);
        EfService.getEfs().then((data)=>{
            setEfs(data);
            setLoading(false);
        }).catch((err)=>{
            console.error(err);
            toast.current?.show({
                severity: "error",
                summary: "เกิดข้อผิดพลาด",
                detail: "ไม่สามารถดึงข้อมูลได้",
                life: 3000
            });
            setLoading(false);
        });
    };
    (0,react_.useEffect)(()=>{
        fetchEfs();
        EfService.getCategories().then(setTgoCategories).catch(console.error);
        EfService.getSubcategories().then(setTgoSubcategories).catch(console.error);
    }, []);
    const filteredEfs = efs.filter((ef)=>ef.item.toLowerCase().includes(nameFilter.toLowerCase()));
    const openNew = ()=>{
        setEf(emptyEf);
        setSubmitted(false);
        setEfDialog(true);
    };
    const hideDialog = ()=>{
        setSubmitted(false);
        setEfDialog(false);
    };
    const saveEf = ()=>{
        setSubmitted(true);
        if (ef.item.trim()) {
            setLoading(true);
            if (ef.ef_id) {
                EfService.updateEf(ef).then((updated)=>{
                    setEfs((prev)=>prev.map((e)=>e.ef_id === updated.ef_id ? updated : e));
                    toast.current?.show({
                        severity: "success",
                        summary: "สำเร็จ",
                        detail: "อัพเดต EF แล้ว",
                        life: 3000
                    });
                    fetchEfs();
                    setEfDialog(false);
                    setEf(emptyEf);
                }).catch((err)=>{
                    console.error(err);
                    toast.current?.show({
                        severity: "error",
                        summary: "เกิดข้อผิดพลาด",
                        detail: "อัพเดต EF ไม่สำเร็จ",
                        life: 3000
                    });
                }).finally(()=>setLoading(false));
            } else {
                EfService.createEf(ef).then((created)=>{
                    setEfs((prev)=>[
                            ...prev,
                            created
                        ]);
                    toast.current?.show({
                        severity: "success",
                        summary: "สำเร็จ",
                        detail: "เพิ่ม EF แล้ว",
                        life: 3000
                    });
                    setEfDialog(false);
                    setEf(emptyEf);
                }).catch((err)=>{
                    console.error(err);
                    toast.current?.show({
                        severity: "error",
                        summary: "เกิดข้อผิดพลาด",
                        detail: "เพิ่ม EF ไม่สำเร็จ",
                        life: 3000
                    });
                }).finally(()=>setLoading(false));
            }
        }
    };
    const editEf = (ef)=>{
        setEf({
            ...ef
        });
        setEfDialog(true);
    };
    const confirmDeleteEf = (ef)=>{
        setEf(ef);
        setDeleteEfDialog(true);
    };
    const deleteEf = ()=>{
        setLoading(true);
        EfService.deleteEf(ef.ef_id).then(()=>{
            setEfs((prev)=>prev.filter((e)=>e.ef_id !== ef.ef_id));
            setDeleteEfDialog(false);
            setEf(emptyEf);
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบ EF แล้ว",
                life: 3000
            });
        }).catch((err)=>{
            console.error(err);
            toast.current?.show({
                severity: "error",
                summary: "เกิดข้อผิดพลาด",
                detail: "ลบ EF ไม่สำเร็จ",
                life: 3000
            });
        }).finally(()=>setLoading(false));
    };
    const deleteSelectedEfs = async ()=>{
        if (!selectedEfs.length) return;
        setLoading(true);
        try {
            await Promise.all(selectedEfs.map((ef)=>EfService.deleteEf(ef.ef_id)));
            setEfs((prev)=>prev.filter((e)=>!selectedEfs.includes(e)));
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบรายการที่เลือกแล้ว",
                life: 3000
            });
            setSelectedEfs([]);
            setDeleteEfsDialog(false);
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
    const onInputChange = (e, name)=>{
        setEf({
            ...ef,
            [name]: e.target.value
        });
    };
    const actionBodyTemplate = (rowData)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-pencil",
                    rounded: true,
                    severity: "success",
                    onClick: ()=>editEf(rowData),
                    tooltip: "แก้ไข",
                    tooltipOptions: {
                        position: "top"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-trash",
                    rounded: true,
                    severity: "danger",
                    onClick: ()=>confirmDeleteEf(rowData),
                    tooltip: "ลบ",
                    tooltipOptions: {
                        position: "top"
                    }
                })
            ]
        });
    };
    const onCategoryChange = (e)=>{
        setEf({
            ...ef,
            tgo_ef_cat_id: e.value,
            tgo_ef_subcat_id: 0
        });
    };
    const onSubcategoryChange = (e)=>{
        setEf({
            ...ef,
            tgo_ef_subcat_id: e.value
        });
    };
    const renderHeader = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "m-0",
                    children: "ค่าการปล่อยก๊าซเรือนกระจก"
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
                            label: "เพิ่มค่าการปล่อยก๊าซเรือนกระจก",
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
                        value: filteredEfs,
                        selection: selectedEfs,
                        onSelectionChange: (e)=>setSelectedEfs(e.value),
                        dataKey: "ef_id",
                        selectionMode: "multiple",
                        paginator: true,
                        rows: 10,
                        rowsPerPageOptions: [
                            5,
                            10,
                            25
                        ],
                        className: "datatable-responsive mt-4",
                        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
                        currentPageReportTemplate: "แสดง {first} ถึง {last} จากทั้งหมด {totalRecords} รายการ",
                        globalFilter: globalFilter,
                        emptyMessage: "ไม่พบข้อมูล",
                        loading: loading,
                        responsiveLayout: "scroll",
                        header: selectedEfs && selectedEfs.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: `เลือก ${selectedEfs.length} รายการ`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                                    label: "ลบที่เลือก",
                                    icon: "pi pi-trash",
                                    severity: "danger",
                                    onClick: ()=>setDeleteEfsDialog(true)
                                })
                            ]
                        }) : null,
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
                                    width: "80px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "item",
                                header: "รายการ EF",
                                sortable: true,
                                style: {
                                    width: "250px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "unit",
                                header: "หน่วย",
                                sortable: true,
                                style: {
                                    width: "100px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "ef",
                                header: "ค่า EF",
                                sortable: true,
                                style: {
                                    width: "100px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "tgo_ef_cat_name",
                                header: "หมวดหมู่",
                                sortable: true,
                                style: {
                                    width: "100px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "tgo_ef_subcat_name",
                                header: "หมวดย่อย",
                                sortable: true,
                                style: {
                                    width: "150px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                body: actionBodyTemplate,
                                header: "การดำเนินการ",
                                headerStyle: {
                                    width: "140px"
                                },
                                bodyStyle: {
                                    textAlign: "center"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AddEditDialog, {
                        visible: efDialog,
                        ef: ef,
                        submitted: submitted,
                        onHide: hideDialog,
                        onChange: onInputChange,
                        onSave: saveEf,
                        tgoCategories: tgoCategories,
                        tgoSubcategories: tgoSubcategories,
                        onCategoryChange: onCategoryChange,
                        onSubcategoryChange: onSubcategoryChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deleteEfDialog,
                        onHide: hideDeleteEfDialog,
                        onConfirm: deleteEf,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${ef.item}?`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deleteEfsDialog,
                        onHide: hideDeleteEfsDialog,
                        onConfirm: deleteSelectedEfs,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ {selectedEfs.length} รายการที่เลือก?`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const page = (TGO);


/***/ })

};
;