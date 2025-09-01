"use strict";
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 8403:
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
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.cjs.js
var utils_cjs = __webpack_require__(7666);
// EXTERNAL MODULE: ./node_modules/primereact/calendar/calendar.cjs.js
var calendar_cjs = __webpack_require__(2186);
// EXTERNAL MODULE: ./node_modules/primereact/api/api.cjs.js
var api_cjs = __webpack_require__(284);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/(full-page)/component/dialog/pcr.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







(0,api_cjs.addLocale)("th-TH", {
    firstDayOfWeek: 0,
    dayNames: [
        "อาทิตย์",
        "จันทร์",
        "อังคาร",
        "พุธ",
        "พฤหัสบดี",
        "ศุกร์",
        "เสาร์"
    ],
    dayNamesShort: [
        "อา",
        "จ",
        "อ",
        "พ",
        "พฤ",
        "ศ",
        "ส"
    ],
    dayNamesMin: [
        "อา",
        "จ",
        "อ",
        "พ",
        "พฤ",
        "ศ",
        "ส"
    ],
    monthNames: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม"
    ],
    monthNamesShort: [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค."
    ],
    today: "วันนี้",
    clear: "ลบ"
});
function AddEditDialog({ visible, pcr, submitted, onHide, onChange, onSave }) {
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
        header: "รายละเอียด PCR",
        modal: true,
        className: "p-fluid",
        footer: footer,
        onHide: onHide,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "pcr_name",
                        className: "font-bold",
                        children: "ชื่อ PCR *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "pcr_name",
                        value: pcr.pcr_name,
                        onChange: (e)=>onChange(e, "pcr_name"),
                        required: true,
                        autoFocus: true,
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && !pcr.pcr_name
                        }),
                        placeholder: "กรอกชื่อ PCR"
                    }),
                    submitted && !pcr.pcr_name && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องกรอกชื่อ PCR"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "approval_date",
                        className: "font-bold",
                        children: "วันที่อนุมัติ"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(calendar_cjs/* Calendar */.f, {
                        value: pcr?.approval_date ? new Date(pcr.approval_date) : null,
                        onChange: (e)=>onChange({
                                value: e.value
                            }, "approval_date"),
                        locale: "th-TH",
                        showIcon: true,
                        dateFormat: "dd/mm/yy"
                    }),
                    submitted && !pcr?.approval_date && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องเลือกวันเริ่มต้น"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "pcr_type",
                        className: "font-bold",
                        children: "ประเภท PCR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "pcr_type",
                        value: pcr.pcr_type,
                        onChange: (e)=>onChange(e, "pcr_type"),
                        placeholder: "กรอกประเภท PCR"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/(full-page)/component/dialog/Delete.tsx
var Delete = __webpack_require__(3448);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 53 modules
var axios = __webpack_require__(3679);
;// CONCATENATED MODULE: ./demo/service/PCRService.tsx

const API_URL = "http://178.128.123.212:5000/api/v1/admin/pcrs"; // เปลี่ยนเป็น URL จริงของคุณ
const PCRService = {
    // ดึง PCR ทั้งหมด
    getPCRs: async ()=>{
        const response = await axios/* default */.Z.get(API_URL);
        return response.data;
    },
    // ดึง PCR ตาม id
    getPCRById: async (id)=>{
        const response = await axios/* default */.Z.get(`${API_URL}/${id}`);
        return response.data;
    },
    // สร้าง PCR ใหม่
    createPCR: async (pcr)=>{
        const response = await axios/* default */.Z.post(API_URL, pcr);
        return response.data;
    },
    // แก้ไข PCR
    updatePCR: async (id, pcr)=>{
        const response = await axios/* default */.Z.put(`${API_URL}/${id}`, pcr);
        return response.data;
    },
    // ลบ PCR
    deletePCR: async (id)=>{
        await axios/* default */.Z.delete(`${API_URL}/${id}`);
    }
};

;// CONCATENATED MODULE: ./app/(main)/pages/menu/pcr/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const PCRManagement = ()=>{
    const emptyPCR = {
        id: 0,
        pcr_name: "",
        approval_date: "",
        pcr_type: "",
        pcr_type_id: 0
    };
    const [pcrs, setPCRs] = (0,react_.useState)([]);
    const [pcrDialog, setPCRDialog] = (0,react_.useState)(false);
    const [selectedPCRs, setSelectedPCRs] = (0,react_.useState)(null);
    const [loading, setLoading] = (0,react_.useState)(false);
    const [deletePCRDialog, setDeletePCRDialog] = (0,react_.useState)(false);
    const [deletePCRsDialog, setDeletePCRsDialog] = (0,react_.useState)(false);
    const [pcr, setPCR] = (0,react_.useState)(emptyPCR);
    const [submitted, setSubmitted] = (0,react_.useState)(false);
    const [globalFilter] = (0,react_.useState)("");
    const [nameFilter, setNameFilter] = (0,react_.useState)("");
    const toast = (0,react_.useRef)(null);
    const dt = (0,react_.useRef)(null);
    const fetchPCRs = async ()=>{
        setLoading(true);
        try {
            const data = await PCRService.getPCRs();
            setPCRs(data);
        } catch (error) {
            console.error("Error fetching PCRs:", error);
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "ไม่สามารถดึงข้อมูล PCR",
                life: 3000
            });
        } finally{
            setLoading(false);
        }
    };
    (0,react_.useEffect)(()=>{
        fetchPCRs();
    }, []);
    const filteredPCRs = pcrs.filter((pcr)=>pcr.pcr_name.toLowerCase().includes(nameFilter.toLowerCase()));
    const openNew = ()=>{
        setPCR(emptyPCR);
        setSubmitted(false);
        setPCRDialog(true);
    };
    const hideDialog = ()=>{
        setSubmitted(false);
        setPCRDialog(false);
    };
    const hideDeletePCRDialog = ()=>{
        setDeletePCRDialog(false);
    };
    const hideDeletePCRsDialog = ()=>{
        setDeletePCRsDialog(false);
    };
    const savePCR = async ()=>{
        setSubmitted(true);
        if (pcr.pcr_name.trim()) {
            setLoading(true);
            try {
                // แปลงวันที่เป็น dd เดือน yyyy พ.ศ.
                const approvalDate = pcr.approval_date instanceof Date ? pcr.approval_date.toLocaleDateString("th-TH", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }) : pcr.approval_date;
                const payload = {
                    pcr_name: pcr.pcr_name,
                    approval_date: approvalDate,
                    pcr_type: pcr.pcr_type,
                    pcr_type_id: pcr.pcr_type_id
                };
                if (pcr.id) {
                    await PCRService.updatePCR(pcr.id, payload);
                    toast.current?.show({
                        severity: "success",
                        summary: "สำเร็จ",
                        detail: "อัปเดต PCR แล้ว",
                        life: 3000
                    });
                } else {
                    await PCRService.createPCR(payload);
                    toast.current?.show({
                        severity: "success",
                        summary: "สำเร็จ",
                        detail: "เพิ่ม PCR แล้ว",
                        life: 3000
                    });
                }
                fetchPCRs();
                setPCRDialog(false);
                setPCR(emptyPCR);
            } catch (error) {
                console.error(error);
                toast.current?.show({
                    severity: "error",
                    summary: "Error",
                    detail: "เกิดข้อผิดพลาด",
                    life: 3000
                });
            } finally{
                setLoading(false);
            }
        }
    };
    const editPCR = (p)=>{
        setPCR({
            ...p
        });
        setPCRDialog(true);
    };
    const confirmDeletePCR = (p)=>{
        setPCR(p);
        setDeletePCRDialog(true);
    };
    const deletePCR = async ()=>{
        setLoading(true);
        try {
            await PCRService.deletePCR(pcr.id);
            fetchPCRs();
            setDeletePCRDialog(false);
            setPCR(emptyPCR);
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบ PCR แล้ว",
                life: 3000
            });
        } catch (error) {
            console.error(error);
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
    const deleteSelectedPCRs = async ()=>{
        if (!selectedPCRs) return;
        setLoading(true);
        try {
            await Promise.all(selectedPCRs.map((pcr)=>PCRService.deletePCR(pcr.id)));
            setPCRs((prev)=>prev.filter((p)=>!selectedPCRs.includes(p)));
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบรายการที่เลือกแล้ว",
                life: 3000
            });
            setSelectedPCRs(null);
            setDeletePCRsDialog(false);
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
        let val;
        if ("target" in e) {
            val = e.target.value; // สำหรับ InputText
        } else {
            val = e.value; // สำหรับ Calendar => Date object
        }
        setPCR({
            ...pcr,
            [name]: val
        });
    };
    const actionBodyTemplate = (rowData)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-pencil",
                    rounded: true,
                    severity: "success",
                    onClick: ()=>editPCR(rowData),
                    tooltip: "แก้ไข",
                    tooltipOptions: {
                        position: "top"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-trash",
                    rounded: true,
                    severity: "danger",
                    onClick: ()=>confirmDeletePCR(rowData),
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
                    children: "จัดการ PCR"
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
                            label: "เพิ่มข้อกำหนดผลิตภัณฑ์",
                            icon: "pi pi-plus",
                            severity: "success",
                            onClick: openNew
                        })
                    ]
                })
            ]
        });
    };
    const formatDate = (value)=>{
        if (!value) return "";
        return new Date(value).toLocaleDateString("th-TH", {
            day: "2-digit",
            month: "long",
            year: "numeric"
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
                        value: filteredPCRs,
                        selection: selectedPCRs,
                        onSelectionChange: (e)=>setSelectedPCRs(e.value),
                        dataKey: "id",
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
                        header: selectedPCRs && selectedPCRs.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: `เลือก ${selectedPCRs.length} รายการ`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                                    label: "ลบที่เลือก",
                                    icon: "pi pi-trash",
                                    severity: "danger",
                                    onClick: ()=>setDeletePCRsDialog(true)
                                })
                            ]
                        }) : null,
                        selectionMode: "checkbox",
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
                                field: "pcr_name",
                                header: "ชื่อ PCR",
                                sortable: true,
                                style: {
                                    width: "300px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "approval_date",
                                header: "วันที่อนุมัติ",
                                sortable: true,
                                style: {
                                    width: "150px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "pcr_type",
                                header: "ประเภท",
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
                        visible: pcrDialog,
                        pcr: pcr,
                        submitted: submitted,
                        onHide: hideDialog,
                        onChange: onInputChange,
                        onSave: savePCR
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deletePCRDialog,
                        onHide: hideDeletePCRDialog,
                        onConfirm: deletePCR,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${pcr.pcr_name}?`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deletePCRsDialog,
                        onHide: hideDeletePCRsDialog,
                        onConfirm: deleteSelectedPCRs,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${selectedPCRs?.length} รายการที่เลือก?`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const page = (PCRManagement);


/***/ })

};
;