/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../../demo/service/ProductService';
import { Demo } from '@/types';
import { TabView, TabPanel } from 'primereact/tabview';
import { useRouter } from 'next/navigation';
// import Verifier from '../../uikit/menu/verifier/page';
import Register_round from '../../uikit/menu/register_round/page';
import Unit from '../../uikit/menu/unit/page';
import Industrial from '../../uikit/menu/industrial/page';
import TGO from '../../uikit/menu/TGO/page';
import PCR from '../../uikit/menu/PCR/page';

const Crud = () => {
    // Product related state and functions
    let emptyProduct: Demo.Product = {
        id: '',
        name: '',
        image: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    // State for active menu/content
    const [activeContent, setActiveContent] = useState('register_round');
    const router = useRouter();
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState<Demo.Product>(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);

    // For page title and icon display
    const menuItems = {
        register_round: { title: 'รอบการขึ้นทะเบียน', icon: 'pi pi-calendar', color: 'primary' },
        unit: { title: 'หน่วย', icon: 'pi pi-sliders-h', color: 'orange-500' },
        industrial: { title: 'อุตสาหกรรม', icon: 'pi pi-building', color: 'blue-500' },
        TGO: { title: 'ค่าการปล่อยก๊าซเรือนกระจก', icon: 'pi pi-globe', color: 'teal-500' },
        PCR: { title: 'ข้อกำหนดผลิตภัณฑ์', icon: 'pi pi-chart-bar', color: 'purple-500' }
    };

    // Navigate to different menu
    const navigateToMenu = (menu: string) => {
        setActiveContent(menu);
    };

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data as any));
    }, []);

    // All your existing functions...
    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);
        if (product.name.trim()) {
            let _products = [...(products as any)];
            let _product = { ...product };
            if (product.id) {
                const index = findIndexById(product.id);
                _products[index] = _product;
                toast.current?.show({
                    severity: 'success',
                    summary: 'สำเร็จ',
                    detail: 'อัพเดตข้อมูลแล้ว',
                    life: 3000
                });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current?.show({
                    severity: 'success',
                    summary: 'สำเร็จ',
                    detail: 'เพิ่มข้อมูลแล้ว',
                    life: 3000
                });
            }
            setProducts(_products as any);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product: Demo.Product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product: Demo.Product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = (products as any)?.filter((val: any) => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current?.show({
            severity: 'success',
            summary: 'สำเร็จ',
            detail: 'ลบข้อมูลแล้ว',
            life: 3000
        });
    };

    const findIndexById = (id: string) => {
        let index = -1;
        for (let i = 0; i < (products as any)?.length; i++) {
            if ((products as any)[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    };
    // เพิ่มฟังก์ชันนี้เข้าไปในโค้ด
    const onCategoryChange = (e: RadioButtonChangeEvent) => {
        let _product = { ...product };
        _product['category'] = e.value;
        setProduct(_product);
    };

    // และเพิ่มฟังก์ชันนี้ซึ่งคุณมีในโค้ดเดิมเช่นกัน
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };
        _product[`${name}`] = val;
        setProduct(_product);
    };

    const onInputNumberChange = (e: InputNumberValueChangeEvent, name: string) => {
        const val = e.value || 0;
        let _product = { ...product };
        _product[`${name}`] = val;
        setProduct(_product);
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    // Render content based on active menu
    const renderContent = () => {
        switch (activeContent) {
            case 'register_round':
                return <Register_round />;
            case 'unit':
                return <Unit />;
            case 'industrial':
                return <Industrial />;
            case 'TGO':
                return <TGO />;
            case 'PCR':
                return <PCR />;
            default:
                return <div className="p-4">กรุณาเลือกเมนู</div>;
        }
    };

    const productDialogFooter = (
        <>
            <Button label="ยกเลิก" icon="pi pi-times" text onClick={hideDialog} />
            <Button label="บันทึก" icon="pi pi-check" text onClick={saveProduct} />
        </>
    );

    const deleteProductDialogFooter = (
        <>
            <Button label="ไม่" icon="pi pi-times" text onClick={hideDeleteProductDialog} />
            <Button label="ใช่" icon="pi pi-check" text onClick={deleteProduct} />
        </>
    );

    return (
        <div className="grid">
            <Toast ref={toast} />

            <div className="col-12">
                {/* Menu Cards */}
                <div className="card bg-white p-5 rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-medium mb-4 text-gray-800 border-bottom-1 border-gray-200 pb-2">จัดการระบบ</h2>
                    <div className="grid grid-nogutter md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {/* Register Round Card */}
                   
                        <div
                            style={{ width: '0.625rem' }}
                            className={`shadow-2 p-3 h-full w-2 border-round bg-white cursor-pointer flex flex-column align-items-center justify-content-center hover:shadow-8 transition-duration-150 ${
                                activeContent === 'register_round' ? 'border-2 border-primary' : ''
                            }`}
                            onClick={() => navigateToMenu('register_round')}
                        >
                            <span className="bg-primary-100 border-circle p-3 mb-3">
                                <i className="pi pi-calendar text-primary text-xl"></i>
                            </span>
                            <div className="text-900 font-medium mb-2 text-center">รอบการขึ้นทะเบียน</div>
                            <span className="text-600 text-sm text-center">กำหนดรอบการลงทะเบียน</span>
                        </div>
                       

                        {/* Unit Card */}

                        <div
                            className={`shadow-2 p-3 h-full w-2 border-round bg-white cursor-pointer flex flex-column align-items-center justify-content-center hover:shadow-8 transition-duration-150 ${
                                activeContent === 'unit' ? 'border-2 border-primary' : ''
                            }`}
                            onClick={() => navigateToMenu('unit')}
                        >
                            <span className="bg-orange-100 border-circle p-3 mb-3">
                                <i className="pi pi-sliders-h text-orange-500 text-xl"></i>
                            </span>
                            <div className="text-900 font-medium mb-2 text-center">หน่วย</div>
                            <span className="text-600 text-sm text-center">การจัดการข้อมูลหน่วย</span>
                        </div>

                        {/* Industrial Card */}

                        <div
                            className={`shadow-2 p-3 h-full w-2 border-round bg-white cursor-pointer flex flex-column align-items-center justify-content-center hover:shadow-8 transition-duration-150 ${
                                activeContent === 'industrial' ? 'border-2 border-primary' : ''
                            }`}
                            onClick={() => navigateToMenu('industrial')}
                        >
                            <span className="bg-blue-100 border-circle p-3 mb-3">
                                <i className="pi pi-building text-blue-500 text-xl"></i>
                            </span>
                            <div className="text-900 font-medium mb-2 text-center">อุตสาหกรรม</div>
                            <span className="text-600 text-sm text-center">ข้อมูลรายชื่ออุตสาหกรรม</span>
                        </div>

                        {/* TGO Card */}

                        <div
                            className={`shadow-2 p-3 h-full  border-round bg-white cursor-pointer flex flex-column align-items-center justify-content-center hover:shadow-8 transition-duration-150 ${
                                activeContent === 'TGO' ? 'border-2 border-primary' : ''
                            }`}
                            onClick={() => navigateToMenu('TGO')}
                        >
                            <span className="bg-teal-100 border-circle p-3 mb-3">
                                <i className="pi pi-globe text-teal-500 text-xl"></i>
                            </span>
                            <div className="text-900 font-medium mb-2 text-center">ค่าการปล่อยก๊าซเรือนกระจก </div>
                            <span className="text-600 text-sm text-center">ค่า EF จากฐานข้อมูล อบก. </span>
                        </div>

                        {/* PCR Card */}

                        <div
                            className={`shadow-2 p-3 h-full w-2 border-round bg-white cursor-pointer flex flex-column align-items-center justify-content-center hover:shadow-8 transition-duration-150 ${
                                activeContent === 'PCR' ? 'border-2 border-primary' : ''
                            }`}
                            onClick={() => navigateToMenu('PCR')}
                        >
                            <span className="bg-purple-100 border-circle p-3 mb-3">
                                <i className="pi pi-chart-bar text-purple-500 text-xl"></i>
                            </span>
                            <div className="text-900 font-medium mb-2 text-center">ข้อกำหนดผลิตภัณฑ์</div>
                            <span className="text-600 text-sm text-center">PCR</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="card">
                    {/* Header with current menu info */}
                    <div className="flex align-items-center justify-content-between pb-4 border-bottom-1 border-300 mb-4">
                        <div className="flex align-items-center">
                            <i className={`${menuItems[activeContent as keyof typeof menuItems]?.icon || 'pi pi-cog'} mr-2 text-xl text-${menuItems[activeContent as keyof typeof menuItems]?.color || 'primary'}`}></i>
                            <h3 className="text-xl font-medium m-0">{menuItems[activeContent as keyof typeof menuItems]?.title || 'จัดการระบบ'}</h3>
                        </div>

                        {/* Action Button - Only show for certain content types */}
                        {/* {['verifier', 'register_round', 'industrial'].includes(activeContent) && <Button label={`เพิ่ม${menuItems[activeContent as keyof typeof menuItems]?.title}`} icon="pi pi-plus" severity="success" onClick={openNew} />} */}
                    </div>

                    {/* Render content based on active menu */}
                    {renderContent()}

                    {/* Product Dialog */}
                    <Dialog
                        visible={productDialog}
                        style={{ width: '450px' }}
                        header={`${product.id ? 'แก้ไข' : 'เพิ่ม'}${menuItems[activeContent as keyof typeof menuItems]?.title || ''}`}
                        modal
                        className="p-fluid"
                        footer={productDialogFooter}
                        onHide={hideDialog}
                    >
                        {product.image && <img src={`/demo/images/product/${product.image}`} alt={product.image} width="150" className="mt-0 mx-auto mb-5 block shadow-2" />}

                        <div className="field">
                            <label htmlFor="name">ชื่อ</label>
                            <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                            {submitted && !product.name && <small className="p-invalid">กรุณากรอกชื่อ</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="description">รายละเอียด</label>
                            <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        </div>

                        {activeContent === 'register_round' && (
                            <div className="field">
                                <label htmlFor="date">วันที่</label>
                                <InputText id="date" type="date" className="w-full" />
                            </div>
                        )}

                        {activeContent === 'industrial' && (
                            <div className="field">
                                <label className="mb-3">ประเภท</label>
                                <div className="formgrid grid">
                                    <div className="field-radiobutton col-6">
                                        <RadioButton inputId="type1" name="category" value="Agriculture" onChange={onCategoryChange} checked={product.category === 'Agriculture'} />
                                        <label htmlFor="type1">เกษตร</label>
                                    </div>
                                    <div className="field-radiobutton col-6">
                                        <RadioButton inputId="type2" name="category" value="Manufacturing" onChange={onCategoryChange} checked={product.category === 'Manufacturing'} />
                                        <label htmlFor="type2">การผลิต</label>
                                    </div>
                                    <div className="field-radiobutton col-6">
                                        <RadioButton inputId="type3" name="category" value="Service" onChange={onCategoryChange} checked={product.category === 'Service'} />
                                        <label htmlFor="type3">บริการ</label>
                                    </div>
                                    <div className="field-radiobutton col-6">
                                        <RadioButton inputId="type4" name="category" value="Other" onChange={onCategoryChange} checked={product.category === 'Other'} />
                                        <label htmlFor="type4">อื่นๆ</label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeContent === 'unit' && (
                            <div className="formgrid grid">
                                <div className="field col">
                                    <label htmlFor="unit">หน่วย</label>
                                    <InputText id="unit" value={product.category} onChange={(e) => onInputChange(e, 'category')} />
                                </div>
                                <div className="field col">
                                    <label htmlFor="abbreviation">ตัวย่อ</label>
                                    <InputText id="abbreviation" value={product.code} onChange={(e) => onInputChange(e, 'code')} />
                                </div>
                            </div>
                        )}
                    </Dialog>

                    {/* Delete Product Dialog */}
                    <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="ยืนยัน" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {product && (
                                <span>
                                    คุณต้องการลบข้อมูล <b>{product.name}</b> ใช่หรือไม่?
                                </span>
                            )}
                        </div>
                    </Dialog>

                    {/* Delete Products Dialog */}
                    <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="ยืนยัน" modal onHide={hideDeleteProductsDialog} footer={deleteProductDialogFooter}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            <span>คุณต้องการลบข้อมูลที่เลือกทั้งหมดใช่หรือไม่?</span>
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default Crud;
