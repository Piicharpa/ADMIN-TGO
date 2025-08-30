'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { SelectButton } from 'primereact/selectbutton';
import { VerifierService } from '@/demo/service/VerifierService';

// Define the Verifier data structure with a new status property for tab filtering
interface Verifier {
    auditor_id: number;
    user_id: number;
    name: string;
    register_id: string;
    description: string;
    expertise: string;
    organization: string;
    address: string;
    subdistrict_id: number;
    district_id: number;
    province_id: number;
    zipcode: number;
    phone_number: string;
    registration_date: string;
    created_date: string;
    updated_date: string;
    prefix_name: string;
    status: 'pending' | 'successful';
}

// Initial empty Verifier object
const emptyVerifier: Verifier = {
    auditor_id: 0,
    user_id: 0,
    name: '',
    register_id: '',
    description: '',
    expertise: '',
    organization: '',
    address: '',
    subdistrict_id: 0,
    district_id: 0,
    province_id: 0,
    zipcode: 0,
    phone_number: '',
    registration_date: '',
    created_date: '',
    updated_date: '',
    prefix_name: '',
    status: 'pending'
};

const VerifierApp = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [verifiers, setVerifiers] = useState<Verifier[] | null>(null);
    const [viewDialog, setViewDialog] = useState(false);
    const [verifierDialog, setVerifierDialog] = useState(false);
    const [deleteVerifierDialog, setDeleteVerifierDialog] = useState(false);
    const [deleteVerifiersDialog, setDeleteVerifiersDialog] = useState(false);
    const [verifier, setVerifier] = useState<Verifier>(emptyVerifier);
    const [selectedVerifiers, setSelectedVerifiers] = useState<Verifier[] | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);

    // Fetch data based on the selected tab
    const fetchData = (tabIndex: number) => {
        setLoading(true);
        VerifierService.getVerifiers()
            .then((data: Verifier[]) => {
                let filteredData = data;
                switch (tabIndex) {
                    case 1: // รอการพิจารณา (Pending)
                        filteredData = data.filter((v: Verifier) => v.status === 'pending');
                        break;
                    case 2: // ได้รับการพิจารณาแล้ว (Successful)
                        filteredData = data.filter((v: Verifier) => v.status === 'successful');
                        break;
                    default: // ทั้งหมด (All)
                        break;
                }
                setVerifiers(filteredData);
                setLoading(false);
            })
            .catch(() => {
                toast.current?.show({
                    severity: 'error',
                    summary: 'เกิดข้อผิดพลาด',
                    detail: 'ไม่สามารถดึงข้อมูลได้',
                    life: 3000
                });
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData(activeIndex);
    }, [activeIndex]);

    // Tab menu options
    const tabOptions = [
        { label: 'ทั้งหมด', value: 0 },
        { label: 'รอการพิจารณา', value: 1 },
        { label: 'ได้รับการพิจารณาแล้ว', value: 2 }
    ];

    const hideDialog = () => {
        setSubmitted(false);
        setVerifierDialog(false);
    };

    const hideDeleteVerifierDialog = () => {
        setDeleteVerifierDialog(false);
    };

    const hideDeleteVerifiersDialog = () => {
        setDeleteVerifiersDialog(false);
    };

    const saveVerifier = () => {
        setSubmitted(true);
        if (verifier.name.trim()) {
            if (verifier.auditor_id) {
                VerifierService.updateVerifier(verifier)
                    .then(() => {
                        fetchData(activeIndex);
                        setVerifierDialog(false);
                        setVerifier(emptyVerifier);
                        toast.current?.show({
                            severity: 'success',
                            summary: 'สำเร็จ',
                            detail: 'อัพเดตข้อมูลผู้ทวนสอบแล้ว',
                            life: 3000
                        });
                    })
                    .catch(() => {
                        toast.current?.show({
                            severity: 'error',
                            summary: 'เกิดข้อผิดพลาด',
                            detail: 'ไม่สามารถอัพเดตข้อมูลได้',
                            life: 3000
                        });
                    });
            } else {
                VerifierService.createVerifier(verifier)
                    .then(() => {
                        fetchData(activeIndex);
                        setVerifierDialog(false);
                        setVerifier(emptyVerifier);
                        toast.current?.show({
                            severity: 'success',
                            summary: 'สำเร็จ',
                            detail: 'เพิ่มผู้ทวนสอบแล้ว',
                            life: 3000
                        });
                    })
                    .catch(() => {
                        toast.current?.show({
                            severity: 'error',
                            summary: 'เกิดข้อผิดพลาด',
                            detail: 'ไม่สามารถเพิ่มข้อมูลได้',
                            life: 3000
                        });
                    });
            }
        }
    };

    const editVerifier = (verifier: Verifier) => {
        setVerifier({ ...verifier });
        setVerifierDialog(true);
    };

    const viewVerifier = (verifier: Verifier) => {
        setVerifier({ ...verifier });
        setViewDialog(true);
    };

    const hideViewDialog = () => {
        setViewDialog(false);
    };

    const confirmDeleteVerifier = (verifier: Verifier) => {
        setVerifier(verifier);
        setDeleteVerifierDialog(true);
    };

    const deleteVerifier = () => {
        if (verifier.auditor_id) {
            VerifierService.deleteVerifier(verifier.auditor_id)
                .then(() => {
                    fetchData(activeIndex);
                    setDeleteVerifierDialog(false);
                    setVerifier(emptyVerifier);
                    toast.current?.show({
                        severity: 'success',
                        summary: 'สำเร็จ',
                        detail: 'ลบผู้ทวนสอบแล้ว',
                        life: 3000
                    });
                })
                .catch(() => {
                    toast.current?.show({
                        severity: 'error',
                        summary: 'เกิดข้อผิดพลาด',
                        detail: 'ไม่สามารถลบข้อมูลได้',
                        life: 3000
                    });
                });
        }
    };

    const deleteSelectedVerifiers = () => {
        if (selectedVerifiers) {
            Promise.all(selectedVerifiers.map(v => VerifierService.deleteVerifier(v.auditor_id)))
                .then(() => {
                    fetchData(activeIndex);
                    setDeleteVerifiersDialog(false);
                    setSelectedVerifiers(null);
                    toast.current?.show({
                        severity: 'success',
                        summary: 'สำเร็จ',
                        detail: 'ลบผู้ทวนสอบที่เลือกแล้ว',
                        life: 3000
                    });
                })
                .catch(() => {
                    toast.current?.show({
                        severity: 'error',
                        summary: 'เกิดข้อผิดพลาด',
                        detail: 'ไม่สามารถลบข้อมูลที่เลือกได้',
                        life: 3000
                    });
                });
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { value: any }, name: string) => {
        const val = 'value' in e ? e.value : e.target?.value || '';
        setVerifier({ ...verifier, [name]: val });
    };

    // Table column templates
    const auditorIdBodyTemplate = (rowData: Verifier) => {
        return (
            <>
                <span className="p-column-title">รหัสผู้ทวนสอบ</span>
                {rowData.auditor_id}
            </>
        );
    };

    const nameBodyTemplate = (rowData: Verifier) => {
        return (
            <>
                <span className="p-column-title">ชื่อ</span>
                {rowData.name}
            </>
        );
    };

    const registerIdBodyTemplate = (rowData: Verifier) => {
        return (
            <>
                <span className="p-column-title">รหัสการลงทะเบียน</span>
                {rowData.register_id}
            </>
        );
    };

    const registrationDateBodyTemplate = (rowData: Verifier) => {
        return (
            <>
                <span className="p-column-title">วันที่ลงทะเบียน</span>
                {rowData.registration_date}
            </>
        );
    };

    const actionBodyTemplate = (rowData: Verifier) => {
        return (
            <>
                <Button icon="pi pi-eye" rounded severity="info" className="mr-2" onClick={() => viewVerifier(rowData)} />
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editVerifier(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => confirmDeleteVerifier(rowData)} />
            </>
        );
    };

    const verifierDialogFooter = (
        <>
            <Button label="ยกเลิก" icon="pi pi-times" text onClick={hideDialog} />
            <Button label="บันทึก" icon="pi pi-check" text onClick={saveVerifier} />
        </>
    );

    const deleteVerifierDialogFooter = (
        <>
            <Button label="ไม่" icon="pi pi-times" text onClick={hideDeleteVerifierDialog} />
            <Button label="ใช่" icon="pi pi-check" text onClick={deleteVerifier} />
        </>
    );

    const deleteVerifiersDialogFooter = (
        <>
            <Button label="ไม่" icon="pi pi-times" text onClick={hideDeleteVerifiersDialog} />
            <Button label="ใช่" icon="pi pi-check" text onClick={deleteSelectedVerifiers} />
        </>
    );

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />

                    <div className="flex justify-content-between align-items-center mb-4">
                        <h5>ผู้ทวนสอบ</h5>
                        <div className="flex align-items-center">
                            <span className="p-input-icon-left mr-3">
                                <i className="pi pi-search" />
                                <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)} placeholder="ค้นหาชื่อผู้ทวนสอบ..." />
                            </span>   
                        </div>
                    </div>

                    <SelectButton value={activeIndex} onChange={(e) => setActiveIndex(e.value)} options={tabOptions} optionLabel="label" className="mb-4 w-full md:w-auto" />

                    <DataTable
                        ref={dt}
                        value={verifiers}
                        selection={selectedVerifiers}
                        onSelectionChange={(e) => setSelectedVerifiers(e.value as Verifier[])}
                        dataKey="auditor_id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25]}
                        className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="แสดง {first} ถึง {last} จากทั้งหมด {totalRecords} รายการ"
                        globalFilter={globalFilter}
                        emptyMessage="ไม่พบข้อมูล"
                        loading={loading}
                        responsiveLayout="scroll"
                    >
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="auditor_id" header="รหัสผู้ทวนสอบ" sortable body={auditorIdBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        <Column field="name" header="ชื่อผู้ทวนสอบ" sortable body={nameBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        <Column field="register_id" header="รหัสการลงทะเบียน" sortable body={registerIdBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        <Column field="registration_date" header="วันที่ลงทะเบียน" body={registrationDateBodyTemplate} sortable></Column>
                        <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                    </DataTable>

                    {/* Dialog สำหรับเพิ่ม/แก้ไขผู้ทวนสอบ */}
                    <Dialog visible={verifierDialog} style={{ width: '450px' }} header="รายละเอียดผู้ทวนสอบ" modal className="p-fluid" footer={verifierDialogFooter} onHide={hideDialog}>
                        <div className="field">
                            <label htmlFor="name">ชื่อ</label>
                            <InputText
                                id="name"
                                value={verifier.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !verifier.name
                                })}
                            />
                            {submitted && !verifier.name && <small className="p-error">จำเป็นต้องกรอกชื่อ</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="register_id">รหัสการลงทะเบียน</label>
                            <InputText
                                id="register_id"
                                value={verifier.register_id}
                                onChange={(e) => onInputChange(e, 'register_id')}
                                required
                                className={classNames({
                                    'p-invalid': submitted && !verifier.register_id
                                })}
                            />
                            {submitted && !verifier.register_id && <small className="p-error">จำเป็นต้องกรอกรหัสการลงทะเบียน</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="prefix_name">คำนำหน้าชื่อ</label>
                            <InputText
                                id="prefix_name"
                                value={verifier.prefix_name}
                                onChange={(e) => onInputChange(e, 'prefix_name')}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="description">รายละเอียด (อีเมล)</label>
                            <InputText
                                id="description"
                                value={verifier.description}
                                onChange={(e) => onInputChange(e, 'description')}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="expertise">ความเชี่ยวชาญ</label>
                            <InputText
                                id="expertise"
                                value={verifier.expertise}
                                onChange={(e) => onInputChange(e, 'expertise')}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="organization">องค์กร</label>
                            <InputText
                                id="organization"
                                value={verifier.organization}
                                onChange={(e) => onInputChange(e, 'organization')}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="address">ที่อยู่</label>
                            <InputTextarea
                                id="address"
                                rows={3}
                                value={verifier.address}
                                onChange={(e) => onInputChange(e, 'address')}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="phone_number">เบอร์โทรศัพท์</label>
                            <InputText
                                id="phone_number"
                                value={verifier.phone_number}
                                onChange={(e) => onInputChange(e, 'phone_number')}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="zipcode">รหัสไปรษณีย์</label>
                            <InputText
                                id="zipcode"
                                value={verifier.zipcode.toString()}
                                onChange={(e) => onInputChange({ value: parseInt(e.target.value) || 0 }, 'zipcode')}
                            />
                        </div>
                    </Dialog>

                    {/* Dialog สำหรับดูรายละเอียดผู้ทวนสอบ */}
                    <Dialog visible={viewDialog} style={{ width: '450px' }} header="รายละเอียดผู้ทวนสอบ" modal onHide={hideViewDialog}>
                        <div className="field">
                            <label className="font-bold">รหัสผู้ทวนสอบ:</label>
                            <div>{verifier.auditor_id || '-'}</div>
                        </div>
                        <div className="field mt-3">
                            <label className="font-bold">ชื่อ:</label>
                            <div>{verifier.name || '-'}</div>
                        </div>
                        <div className="field mt-3">
                            <label className="font-bold">รหัสการลงทะเบียน:</label>
                            <div>{verifier.register_id || '-'}</div>
                        </div>
                        <div className="field mt-3">
                            <label className="font-bold">วันที่ลงทะเบียน:</label>
                            <div>{verifier.registration_date || '-'}</div>
                        </div>
                        <div className="field mt-3">
                            <label className="font-bold">อีเมล:</label>
                            <div>{verifier.description || '-'}</div>
                        </div>
                        <div className="field mt-3">
                            <label className="font-bold">ความเชี่ยวชาญ:</label>
                            <div>{verifier.expertise || '-'}</div>
                        </div>
                        <div className="field mt-3">
                            <label className="font-bold">องค์กร:</label>
                            <div>{verifier.organization || '-'}</div>
                        </div>
                        <div className="field mt-3">
                            <label className="font-bold">ที่อยู่:</label>
                            <div>{verifier.address || '-'}</div>
                        </div>
                    </Dialog>

                    {/* Dialog ยืนยันลบผู้ทวนสอบ */}
                    <Dialog visible={deleteVerifierDialog} style={{ width: '450px' }} header="ยืนยัน" modal footer={deleteVerifierDialogFooter} onHide={hideDeleteVerifierDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {verifier && (
                                <span>
                                    คุณแน่ใจหรือไม่ว่าต้องการลบ <b>{verifier.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>

                    {/* Dialog ยืนยันลบผู้ทวนสอบที่เลือก */}
                    <Dialog visible={deleteVerifiersDialog} style={{ width: '450px' }} header="ยืนยัน" modal footer={deleteVerifiersDialogFooter} onHide={hideDeleteVerifiersDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {selectedVerifiers && <span>คุณแน่ใจหรือไม่ว่าต้องการลบรายการที่เลือก?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default VerifierApp;
