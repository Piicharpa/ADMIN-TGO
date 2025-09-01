"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 8794:
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
// EXTERNAL MODULE: ./node_modules/primereact/calendar/calendar.cjs.js
var calendar_cjs = __webpack_require__(2186);
// EXTERNAL MODULE: ./node_modules/primereact/api/api.cjs.js
var api_cjs = __webpack_require__(284);
// EXTERNAL MODULE: ./node_modules/primereact/dropdown/dropdown.cjs.js
var dropdown_cjs = __webpack_require__(1042);
// EXTERNAL MODULE: ./node_modules/primereact/utils/utils.cjs.js
var utils_cjs = __webpack_require__(7666);
;// CONCATENATED MODULE: ./app/(full-page)/component/dialog/round.tsx
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
function AddEditDialog({ visible, round, submitted, onHide, onChange, onSave }) {
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
        header: "รายละเอียดรอบลงทะเบียน",
        modal: true,
        className: "p-fluid",
        footer: footer,
        onHide: onHide,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "quarter",
                        className: "font-bold",
                        children: "รอบ *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                        id: "quarter",
                        value: round?.quarter || "",
                        onChange: (e)=>onChange(e, "quarter"),
                        required: true,
                        autoFocus: true,
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && !round?.quarter
                        }),
                        placeholder: "กรอกรอบ"
                    }),
                    submitted && !round?.quarter && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องกรอกรอบลงทะเบียน"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "start",
                        className: "font-bold",
                        children: "วันเริ่มต้น *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(calendar_cjs/* Calendar */.f, {
                        id: "start",
                        value: round?.start ? new Date(round.start) : null,
                        onChange: (e)=>{
                            const date = e.value instanceof Date ? e.value : null;
                            onChange({
                                value: date ? date.toISOString().split("T")[0] : ""
                            }, "start");
                        },
                        showIcon: true,
                        dateFormat: "dd/mm/yy",
                        yearRange: "2500:2600",
                        locale: "th-TH" // <-- ต้องตรงกับที่ addLocale
                        ,
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && !round?.start
                        }),
                        placeholder: "เลือกวันเริ่มต้น"
                    }),
                    submitted && !round?.start && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องเลือกวันเริ่มต้น"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "end",
                        className: "font-bold",
                        children: "วันสิ้นสุด *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(calendar_cjs/* Calendar */.f, {
                        id: "end",
                        value: round?.end ? new Date(round.end) : null,
                        onChange: (e)=>{
                            const date = e.value instanceof Date ? e.value : null;
                            onChange({
                                value: date ? date.toISOString().split("T")[0] : ""
                            }, "end");
                        },
                        showIcon: true,
                        dateFormat: "dd/mm/yy",
                        yearRange: "2500:2600",
                        locale: "th-TH" // <-- ต้องตรงกับที่ addLocale
                        ,
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && !round?.start
                        }),
                        placeholder: "เลือกวันเริ่มต้น"
                    }),
                    submitted && !round?.end && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องเลือกวันสิ้นสุด"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "field mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "status",
                        className: "font-bold",
                        children: "สถานะ *"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_cjs.Dropdown, {
                        id: "status",
                        value: round?.status ?? "",
                        options: [
                            {
                                label: "ใช้งาน",
                                value: 1
                            },
                            {
                                label: "ไม่ใช้งาน",
                                value: 0
                            }
                        ],
                        onChange: (e)=>onChange(e, "status"),
                        optionLabel: "label",
                        optionValue: "value",
                        placeholder: "เลือกสถานะ",
                        className: (0,utils_cjs.classNames)({
                            "p-invalid": submitted && round?.status === undefined
                        })
                    }),
                    submitted && round?.status === undefined && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "p-error",
                        children: "จำเป็นต้องเลือกสถานะ"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/(full-page)/component/dialog/Delete.tsx
var Delete = __webpack_require__(3448);
;// CONCATENATED MODULE: ./demo/service/RoundService.tsx
const API_URL = "http://178.128.123.212:5000/api/v1/admin/rounds";
function mapRound(apiData) {
    return {
        id: apiData.id,
        quarter: apiData.quarter,
        start: apiData.start,
        end: apiData.end,
        status: apiData.status
    };
}
const RoundService = {
    getRounds () {
        return fetch(API_URL, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>{
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        }).then((data)=>data.map(mapRound));
    },
    getRoundById (id) {
        return fetch(`${API_URL}/${id}`, {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>{
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        }).then(mapRound);
    },
    createRound (round) {
        return fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(round)
        }).then((res)=>{
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json().then(mapRound);
        });
    },
    updateRound (id, round) {
        return fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(round)
        }).then((res)=>{
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json().then(mapRound);
        });
    },
    deleteRound (id) {
        return fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        }).then((res)=>{
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return true;
        });
    }
};

;// CONCATENATED MODULE: ./app/(main)/pages/menu/round/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const Register_round = ()=>{
    const emptyRound = {
        id: 0,
        quarter: "",
        start: "",
        end: "",
        status: 1
    };
    const [rounds, setRounds] = (0,react_.useState)([]);
    const [loading, setLoading] = (0,react_.useState)(false);
    const [roundFilter, setRoundFilter] = (0,react_.useState)(""); // Local state for round filtering
    const [roundDialog, setRoundDialog] = (0,react_.useState)(false);
    const [deleteDialog, setDeleteDialog] = (0,react_.useState)(false);
    const [deleteRoundsDialog, setDeleteRoundsDialog] = (0,react_.useState)(false);
    const [currentRound, setCurrentRound] = (0,react_.useState)(emptyRound);
    const [submitted, setSubmitted] = (0,react_.useState)(false);
    const [selectedRounds, setSelectedRounds] = (0,react_.useState)([]);
    const toast = (0,react_.useRef)(null);
    const dt = (0,react_.useRef)(null);
    const fetchRounds = async ()=>{
        setLoading(true);
        try {
            const data = await RoundService.getRounds();
            const formattedData = data.map((r)=>({
                    ...r,
                    start: r.start || "",
                    end: r.end || ""
                }));
            setRounds(formattedData);
        } catch (error) {
            console.error("Fetch rounds error:", error);
        } finally{
            setLoading(false);
        }
    };
    (0,react_.useEffect)(()=>{
        fetchRounds();
    }, []);
    const openNew = ()=>{
        setCurrentRound(emptyRound);
        setSubmitted(false);
        setRoundDialog(true);
    };
    const hideDialog = ()=>{
        setSubmitted(false);
        setRoundDialog(false);
        setCurrentRound(emptyRound);
    };
    const hideDeleteRoundDialog = ()=>{
        setDeleteDialog(false);
    };
    const hideDeleteRoundsDialog = ()=>{
        setDeleteRoundsDialog(false);
    };
    const toThaiDate = (date)=>{
        if (!date) return "";
        const d = date instanceof Date ? date : new Date(date);
        const day = d.getDate().toString().padStart(2, "0");
        const month = (d.getMonth() + 1).toString().padStart(2, "0"); // เดือน 0-11
        const year = d.getFullYear() + 543; // แปลงเป็น พ.ศ.
        return `${day}/${month}/${year}`;
    };
    const saveRound = async ()=>{
        setSubmitted(true);
        if (!currentRound.quarter.trim()) return;
        setLoading(true);
        try {
            // แปลง start และ end เป็น dd/mm/yyyy พ.ศ.
            const roundToSave = {
                ...currentRound,
                start: toThaiDate(currentRound.start),
                end: toThaiDate(currentRound.end)
            };
            if (currentRound.id && currentRound.id !== 0) {
                // update
                const updated = await RoundService.updateRound(currentRound.id, roundToSave);
                setRounds((prev)=>prev.map((r)=>r.id === updated.id ? updated : r));
                toast.current?.show({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "แก้ไขรอบแล้ว",
                    life: 3000
                });
            } else {
                // create
                const maxId = rounds.length ? Math.max(...rounds.map((r)=>r.id)) : 0;
                const roundToCreate = {
                    ...roundToSave,
                    id: maxId + 1
                };
                const created = await RoundService.createRound(roundToCreate);
                setRounds((prev)=>[
                        ...prev,
                        created
                    ]);
                toast.current?.show({
                    severity: "success",
                    summary: "สำเร็จ",
                    detail: "เพิ่มรอบแล้ว",
                    life: 3000
                });
            }
            fetchRounds();
            setRoundDialog(false);
            setCurrentRound(emptyRound);
            setSubmitted(false);
        } catch (error) {
            console.error(error);
            toast.current?.show({
                severity: "error",
                summary: "ผิดพลาด",
                detail: "บันทึกรอบไม่สำเร็จ",
                life: 3000
            });
        } finally{
            setLoading(false);
        }
    };
    const deleteRound = async ()=>{
        if (!currentRound.id) return;
        setLoading(true);
        try {
            await RoundService.deleteRound(currentRound.id);
            setRounds(rounds.filter((r)=>r.id !== currentRound.id));
            toast.current?.show({
                severity: "success",
                summary: "สำเร็จ",
                detail: "ลบรอบแล้ว",
                life: 3000
            });
        } catch (error) {
            console.error(error);
            toast.current?.show({
                severity: "error",
                summary: "ผิดพลาด",
                detail: "ไม่สามารถลบรอบได้",
                life: 3000
            });
        } finally{
            setDeleteDialog(false);
            setCurrentRound(emptyRound);
            setLoading(false);
        }
    };
    const deleteSelectedRounds = async ()=>{
        if (!selectedRounds) return;
        setLoading(true);
        try {
            await Promise.all(selectedRounds.map((u)=>RoundService.deleteRound(u.id)));
            setRounds(rounds.filter((u)=>!selectedRounds.includes(u)));
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
            setDeleteRoundsDialog(false);
            setSelectedRounds(null);
            setLoading(false);
        }
    };
    const confirmDelete = (round)=>{
        setCurrentRound(round);
        setDeleteDialog(true);
    };
    const editRound = (round)=>{
        setCurrentRound({
            ...round,
            start: round.start ? round.start : "",
            end: round.end ? round.end : ""
        });
        setRoundDialog(true);
    };
    const onInputChange = (e, name)=>{
        const val = "target" in e ? e.target.value : e.value;
        setCurrentRound((prev)=>({
                ...prev,
                [name]: val
            }));
    };
    const actionBodyTemplate = (rowData)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-pencil",
                    rounded: true,
                    severity: "success",
                    onClick: ()=>editRound(rowData),
                    tooltip: "แก้ไข",
                    tooltipOptions: {
                        position: "top"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                    icon: "pi pi-trash",
                    rounded: true,
                    severity: "danger",
                    onClick: ()=>confirmDelete(rowData),
                    tooltip: "ลบ",
                    tooltipOptions: {
                        position: "top"
                    }
                })
            ]
        });
    const filteredRounds = rounds.filter((round)=>round.quarter?.toLowerCase().includes(roundFilter.toLowerCase()));
    const formatDate = (value)=>{
        if (!value) return "";
        return new Date(value).toLocaleDateString("th-TH", {
            day: "2-digit",
            month: "2-digit",
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "m-0",
                                children: "จัดการรอบลงทะเบียน"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-column md:flex-row gap-3 w-full md:w-auto",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "p-input-icon-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "pi pi-search"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(inputtext_cjs.InputText, {
                                                type: "search",
                                                onInput: (e)=>setRoundFilter(e.currentTarget.value),
                                                placeholder: "ค้นหารอบ...",
                                                className: "w-full"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                                        label: "เพิ่มรอบ",
                                        icon: "pi pi-plus",
                                        severity: "success",
                                        onClick: openNew
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(datatable_cjs/* DataTable */.w, {
                        ref: dt,
                        value: filteredRounds,
                        selection: selectedRounds,
                        onSelectionChange: (e)=>setSelectedRounds(e.value),
                        dataKey: "id",
                        paginator: true,
                        rows: 10,
                        rowsPerPageOptions: [
                            5,
                            10,
                            25
                        ],
                        emptyMessage: "ไม่พบข้อมูล",
                        loading: loading,
                        responsiveLayout: "scroll",
                        className: "mt-4",
                        header: selectedRounds && selectedRounds.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: `เลือก ${selectedRounds.length} รายการ`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(button_cjs.Button, {
                                    label: "ลบที่เลือก",
                                    icon: "pi pi-trash",
                                    severity: "danger",
                                    onClick: ()=>setDeleteRoundsDialog(true)
                                })
                            ]
                        }) : null,
                        selectionMode: "multiple",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                selectionMode: "multiple",
                                headerStyle: {
                                    width: "3rem"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "quarter",
                                header: "รอบ",
                                sortable: true,
                                style: {
                                    width: "200px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "start",
                                header: "วันเริ่มต้น",
                                sortable: true,
                                style: {
                                    width: "150px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "end",
                                header: "วันสิ้นสุด",
                                sortable: true,
                                style: {
                                    width: "150px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(column_cjs/* Column */.s, {
                                field: "status",
                                header: "สถานะ",
                                sortable: true,
                                body: (rowData)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `p-tag p-component p-tag-${rowData.status === 1 ? "success" : "danger"}`,
                                        children: rowData.status === 1 ? "ใช้งาน" : "ไม่ใช้งาน"
                                    }),
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
                    /*#__PURE__*/ jsx_runtime_.jsx(AddEditDialog, {
                        visible: roundDialog,
                        round: currentRound,
                        submitted: submitted,
                        onHide: hideDialog,
                        onChange: onInputChange,
                        onSave: saveRound
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deleteDialog,
                        onHide: hideDeleteRoundDialog,
                        onConfirm: deleteRound,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${currentRound.quarter}?`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                        visible: deleteRoundsDialog,
                        onHide: hideDeleteRoundsDialog,
                        onConfirm: deleteSelectedRounds,
                        message: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${selectedRounds?.length} รายการที่เลือก?`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const page = (Register_round);


/***/ })

};
;