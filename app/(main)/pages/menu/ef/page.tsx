"use client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import AddEditDialog from "../../../../(full-page)/component/dialog/ef";
import DeleteDialog from "../../../../(full-page)/component/dialog/Delete";
import React, { useEffect, useRef, useState } from "react";
import { EfService } from "@/demo/service/EfService";
import type { Demo } from "@/types";
type Ef = Demo.Ef;

const TGO = () => {
  let emptyEf: Ef = {
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
    tgo_ef_cat_id: 0,
  };

  const [efs, setEfs] = useState<Ef[]>([]);
  const [efDialog, setEfDialog] = useState(false);
  const [deleteEfDialog, setDeleteEfDialog] = useState(false);
  const [deleteEfsDialog, setDeleteEfsDialog] = useState(false);
  const [ef, setEf] = useState<Ef>(emptyEf);
  const [selectedEfs, setSelectedEfs] = useState<Ef[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [tgoCategories, setTgoCategories] = useState<Demo.TgoEfCategory[]>([]);
  const [tgoSubcategories, setTgoSubcategories] = useState<
    Demo.TgoEfSubcategory[]
  >([]);
  const toast = useRef<Toast>(null);
  const hideDeleteEfDialog = () => setDeleteEfDialog(false);
  const hideDeleteEfsDialog = () => setDeleteEfsDialog(false);
  const dt = useRef<DataTable<Ef[]>>(null);
  const fetchEfs = () => {
    setLoading(true);
    EfService.getEfs()
      .then((data) => {
        setEfs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.current?.show({
          severity: "error",
          summary: "เกิดข้อผิดพลาด",
          detail: "ไม่สามารถดึงข้อมูลได้",
          life: 3000,
        });
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchEfs();
    EfService.getCategories().then(setTgoCategories).catch(console.error);

    EfService.getSubcategories().then(setTgoSubcategories).catch(console.error);
  }, []);
  const filteredEfs = efs.filter((ef) =>
    ef.item.toLowerCase().includes(nameFilter.toLowerCase())
  );
  const openNew = () => {
    setEf(emptyEf);
    setSubmitted(false);
    setEfDialog(true);
  };
  const hideDialog = () => {
    setSubmitted(false);
    setEfDialog(false);
  };
  const saveEf = () => {
    setSubmitted(true);
    if (ef.item.trim()) {
      setLoading(true);
      if (ef.ef_id) {
        EfService.updateEf(ef)
          .then((updated) => {
            setEfs((prev) =>
              prev.map((e) => (e.ef_id === updated.ef_id ? updated : e))
            );
            toast.current?.show({
              severity: "success",
              summary: "สำเร็จ",
              detail: "อัพเดต EF แล้ว",
              life: 3000,
            });
            setEfDialog(false);
            setEf(emptyEf);
          })
          .catch((err) => {
            console.error(err);
            toast.current?.show({
              severity: "error",
              summary: "เกิดข้อผิดพลาด",
              detail: "อัพเดต EF ไม่สำเร็จ",
              life: 3000,
            });
          })
          .finally(() => setLoading(false));
      } else {
        EfService.createEf(ef)
          .then((created) => {
            setEfs((prev) => [...prev, created]);
            toast.current?.show({
              severity: "success",
              summary: "สำเร็จ",
              detail: "เพิ่ม EF แล้ว",
              life: 3000,
            });
            setEfDialog(false);
            setEf(emptyEf);
          })
          .catch((err) => {
            console.error(err);
            toast.current?.show({
              severity: "error",
              summary: "เกิดข้อผิดพลาด",
              detail: "เพิ่ม EF ไม่สำเร็จ",
              life: 3000,
            });
          })
          .finally(() => setLoading(false));
      }
    }
  };
  const editEf = (ef: Ef) => {
    setEf({ ...ef });
    setEfDialog(true);
  };
  const confirmDeleteEf = (ef: Ef) => {
    setEf(ef);
    setDeleteEfDialog(true);
  };
  const deleteEf = () => {
    setLoading(true);
    EfService.deleteEf(ef.ef_id)
      .then(() => {
        setEfs((prev) => prev.filter((e) => e.ef_id !== ef.ef_id));
        setDeleteEfDialog(false);
        setEf(emptyEf);
        toast.current?.show({
          severity: "success",
          summary: "สำเร็จ",
          detail: "ลบ EF แล้ว",
          life: 3000,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.current?.show({
          severity: "error",
          summary: "เกิดข้อผิดพลาด",
          detail: "ลบ EF ไม่สำเร็จ",
          life: 3000,
        });
      })
      .finally(() => setLoading(false));
  };
  const deleteSelectedEfs = async () => {
    if (!selectedEfs.length) return;
    setLoading(true);
    try {
      await Promise.all(selectedEfs.map((ef) => EfService.deleteEf(ef.ef_id)));
      setEfs((prev) => prev.filter((e) => !selectedEfs.includes(e)));
      toast.current?.show({
        severity: "success",
        summary: "สำเร็จ",
        detail: "ลบรายการที่เลือกแล้ว",
        life: 3000,
      });
      setSelectedEfs([]);
      setDeleteEfsDialog(false);
    } catch {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "เกิดข้อผิดพลาด",
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof Ef
  ) => {
    setEf({ ...ef, [name]: e.target.value });
  };
  const actionBodyTemplate = (rowData: Ef) => {
    return (
      <div className="flex gap-1">
        <Button
          icon="pi pi-pencil"
          rounded
          severity="success"
          onClick={() => editEf(rowData)}
          tooltip="แก้ไข"
          tooltipOptions={{ position: "top" }}
        />
        <Button
          icon="pi pi-trash"
          rounded
          severity="danger"
          onClick={() => confirmDeleteEf(rowData)}
          tooltip="ลบ"
          tooltipOptions={{ position: "top" }}
        />
      </div>
    );
  };
  const onCategoryChange = (e: any) => {
    setEf({ ...ef, tgo_ef_cat_id: e.value, tgo_ef_subcat_id: 0 });
  };
  const onSubcategoryChange = (e: any) => {
    setEf({ ...ef, tgo_ef_subcat_id: e.value });
  };
  const renderHeader = () => {
    return (
      <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-3">
        <h2 className="m-0">ค่าการปล่อยก๊าซเรือนกระจก</h2>
        <div className="flex flex-column md:flex-row gap-3">
          <span className="p-input-icon-left mr-3">
            <i className="pi pi-search" />
            <InputText
              type="search"
              placeholder="ค้นหาด้วยชื่อ..."
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="w-full"
            />
          </span>
          <Button
            label="เพิ่มค่าการปล่อยก๊าซเรือนกระจก"
            icon="pi pi-plus"
            severity="success"
            onClick={openNew}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card p-4">
          <Toast ref={toast} />
          {renderHeader()}
          <DataTable
            ref={dt}
            value={filteredEfs}
            selection={selectedEfs}
            onSelectionChange={(e) => setSelectedEfs(e.value as Ef[])}
            dataKey="ef_id"
            selectionMode="multiple"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            className="datatable-responsive mt-4"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="แสดง {first} ถึง {last} จากทั้งหมด {totalRecords} รายการ"
            globalFilter={globalFilter}
            emptyMessage="ไม่พบข้อมูล"
            loading={loading}
            responsiveLayout="scroll"
            header={
              selectedEfs && selectedEfs.length > 0 ? (
                <div className="flex justify-content-between align-items-center">
                  <span>{`เลือก ${selectedEfs.length} รายการ`}</span>
                  <Button
                    label="ลบที่เลือก"
                    icon="pi pi-trash"
                    severity="danger"
                    onClick={() => setDeleteEfsDialog(true)}
                  />
                </div>
              ) : null
            }
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column
              field="index"
              header="ลำดับ"
              body={(_, { rowIndex }) => rowIndex + 1}
              style={{ width: "80px" }}
            />
            <Column
              field="item"
              header="รายการ EF"
              sortable
              style={{ width: "250px" }}
            ></Column>
            <Column
              field="unit"
              header="หน่วย"
              sortable
              style={{ width: "100px" }}
            ></Column>
            <Column
              field="ef"
              header="ค่า EF"
              sortable
              style={{ width: "100px" }}
            ></Column>
            <Column
              field="tgo_ef_cat_name"
              header="หมวดหมู่"
              sortable
              style={{ width: "100px" }}
            ></Column>
            <Column
              field="tgo_ef_subcat_name"
              header="หมวดย่อย"
              sortable
              style={{ width: "150px" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              header="การดำเนินการ"
              headerStyle={{ width: "140px" }}
              bodyStyle={{ textAlign: "center" }}
            ></Column>
          </DataTable>
          <AddEditDialog
            visible={efDialog}
            ef={ef}
            submitted={submitted}
            onHide={hideDialog}
            onChange={onInputChange}
            onSave={saveEf}
            tgoCategories={tgoCategories}
            tgoSubcategories={tgoSubcategories}
            onCategoryChange={onCategoryChange}
            onSubcategoryChange={onSubcategoryChange}
          />
          <DeleteDialog
            visible={deleteEfDialog}
            onHide={hideDeleteEfDialog}
            onConfirm={deleteEf}
            message={`คุณแน่ใจหรือไม่ว่าต้องการลบ ${ef.item}?`}
          />
          <DeleteDialog
            visible={deleteEfsDialog}
            onHide={hideDeleteEfsDialog}
            onConfirm={deleteSelectedEfs}
            message={`คุณแน่ใจหรือไม่ว่าต้องการลบ {selectedEfs.length} รายการที่เลือก?`}
          />
        </div>
      </div>
    </div>
  );
};

export default TGO;
