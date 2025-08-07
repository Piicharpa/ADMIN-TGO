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
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from 'react';
import { ProductService } from '@/demo/service/ProductService';
import { Demo } from '@/types';
import { TabMenu } from 'primereact/tabmenu';

const TGO = () => {
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

    const [activeIndex, setActiveIndex] = useState(0);
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [viewDialog, setViewDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState<Demo.Product>(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);

    // ดึงข้อมูลตาม tab ที่เลือก
    const fetchData = (tabIndex: number) => {
        setLoading(true);

        // สำหรับการทดสอบใช้ ProductService ไปก่อน
        // ในการใช้งานจริงให้เปลี่ยนเป็น fetch จาก endpoint จริง
        ProductService.getProducts()
            .then((data) => {
                setProducts(data as any);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
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
        // โหลดข้อมูลเมื่อเริ่มต้นและเมื่อเปลี่ยน tab
        fetchData(activeIndex);
    }, [activeIndex]);

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    // แท็บเมนู
    const wizardItems = [{ label: 'ทั้งหมด' }, { label: 'รอขึ้นทะเบียน' }, { label: 'ขึ้นทะเบียน' }];

    const handleTabChange = (e: any) => {
        setActiveIndex(e.index);
        // ข้อมูลจะถูกโหลดใหม่ใน useEffect ที่ขึ้นอยู่กับ activeIndex
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
                    detail: 'อัพเดตข้อมูล อบก.แล้ว',
                    life: 3000
                });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current?.show({
                    severity: 'success',
                    summary: 'สำเร็จ',
                    detail: 'เพิ่ม อบก.แล้ว',
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

    const viewProduct = (product: Demo.Product) => {
        setProduct({ ...product });
        setViewDialog(true);
    };

    const hideViewDialog = () => {
        setViewDialog(false);
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
            detail: 'ลบ อบก.แล้ว',
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

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    const exportCSV = () => {
        dt.current?.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = (products as any)?.filter((val: any) => !(selectedProducts as any)?.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current?.show({
            severity: 'success',
            summary: 'สำเร็จ',
            detail: 'ลบ อบก.ที่เลือกแล้ว',
            life: 3000
        });
    };

    const onCategoryChange = (e: RadioButtonChangeEvent) => {
        let _product = { ...product };
        _product['category'] = e.value;
        setProduct(_product);
    };

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

    const codeBodyTemplate = (rowData: Demo.Product) => {
        return (
            <>
                <span className="p-column-title">Code</span>
                {rowData.code}
            </>
        );
    };

    const nameBodyTemplate = (rowData: Demo.Product) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </>
        );
    };

    const imageBodyTemplate = (rowData: Demo.Product) => {
        return (
            <>
                <span className="p-column-title">Image</span>
                <img src={`/demo/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2" width="100" />
            </>
        );
    };

    const priceBodyTemplate = (rowData: Demo.Product) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {formatCurrency(rowData.price as number)}
            </>
        );
    };

    const categoryBodyTemplate = (rowData: Demo.Product) => {
        return (
            <>
                <span className="p-column-title">Category</span>
                {rowData.category}
            </>
        );
    };

    const ratingBodyTemplate = (rowData: Demo.Product) => {
        return (
            <>
                <span className="p-column-title">Reviews</span>
                <Rating value={rowData.rating} readOnly cancel={false} />
            </>
        );
    };

    const statusBodyTemplate = (rowData: Demo.Product) => {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`product-badge status-${rowData.inventoryStatus?.toLowerCase()}`}>{rowData.inventoryStatus}</span>
            </>
        );
    };

    const actionBodyTemplate = (rowData: Demo.Product) => {
        return (
            <>
                <Button icon="pi pi-eye" rounded severity="info" className="mr-2" onClick={() => viewProduct(rowData)} />
                <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded severity="warning" onClick={() => confirmDeleteProduct(rowData)} />
            </>
        );
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

    const deleteProductsDialogFooter = (
        <>
            <Button label="ไม่" icon="pi pi-times" text onClick={hideDeleteProductsDialog} />
            <Button label="ใช่" icon="pi pi-check" text onClick={deleteSelectedProducts} />
        </>
    );

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />

                    <div className="flex justify-content-between align-items-center mb-4">
                        <h5></h5>
                        <div className="flex align-items-center">
                            <span className="p-input-icon-left mr-3">
                                <i className="pi pi-search" />
                                <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)} placeholder="ค้นหา..." />
                            </span>
                            <Button label="เพิ่ม อบก." icon="pi pi-plus" severity="success" onClick={openNew} />
                        </div>
                    </div>

                    {/* <TabMenu model={wizardItems} activeIndex={activeIndex} onTabChange={handleTabChange} /> */}

                    <DataTable
                        ref={dt}
                        value={products}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value as any)}
                        dataKey="id"
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
                        <Column field="code" header="#"></Column>
                        <Column field="name" header="ชื่อ อบก." sortable body={nameBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        <Column header="รหัส" sortable body={codeBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        <Column field="price" header="วันที่" body={priceBodyTemplate} sortable></Column>
                        <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                    </DataTable>

                    {/* Dialog สำหรับเพิ่ม/แก้ไข อบก. */}
                    <Dialog visible={productDialog} style={{ width: '450px' }} header="รายละเอียด อบก." modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                        {product.image && <img src={`/demo/images/product/${product.image}`} alt={product.image} width="150" className="mt-0 mx-auto mb-5 block shadow-2" />}
                        <div className="field">
                            <label htmlFor="name">ชื่อ</label>
                            <InputText
                                id="name"
                                value={product.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !product.name
                                })}
                            />
                            {submitted && !product.name && <small className="p-error">จำเป็นต้องกรอกชื่อ</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="description">รายละเอียด</label>
                            <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        </div>
                        <div className="field">
                            <label className="mb-3">ประเภท</label>
                            <div className="formgrid grid">
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category1" name="category" value="ประเภท A" onChange={onCategoryChange} checked={product.category === 'ประเภท A'} />
                                    <label htmlFor="category1">ประเภท A</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category2" name="category" value="ประเภท B" onChange={onCategoryChange} checked={product.category === 'ประเภท B'} />
                                    <label htmlFor="category2">ประเภท B</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category3" name="category" value="ประเภท C" onChange={onCategoryChange} checked={product.category === 'ประเภท C'} />
                                    <label htmlFor="category3">ประเภท C</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category4" name="category" value="ประเภท D" onChange={onCategoryChange} checked={product.category === 'ประเภท D'} />
                                    <label htmlFor="category4">ประเภท D</label>
                                </div>
                            </div>
                        </div>
                        <div className="formgrid grid">
                            <div className="field col">
                                <label htmlFor="price">ราคา</label>
                                <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="THB" locale="th-TH" />
                            </div>
                            <div className="field col">
                                <label htmlFor="quantity">จำนวน</label>
                                <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                            </div>
                        </div>
                    </Dialog>

                    {/* Dialog ยืนยันลบ อบก. */}
                    <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="ยืนยัน" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {product && (
                                <span>
                                    คุณแน่ใจหรือไม่ว่าต้องการลบ <b>{product.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>

                    {/* Dialog ยืนยันลบ อบก.ที่เลือก */}
                    <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="ยืนยัน" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {product && <span>คุณแน่ใจหรือไม่ว่าต้องการลบรายการที่เลือก?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default TGO;
