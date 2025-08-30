"use client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
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
  const toast = useRef<Toast>(null);
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
  }, []);

  // กรองข้อมูลตามชื่อ
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

  const hideDeleteEfDialog = () => setDeleteEfDialog(false);
  const hideDeleteEfsDialog = () => setDeleteEfsDialog(false);

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

  const onInputNumberChange = (
    e: InputNumberValueChangeEvent,
    name: keyof Ef
  ) => {
    setEf({ ...ef, [name]: e.value ?? 0 });
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

  const efDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button label="ยกเลิก" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="บันทึก" icon="pi pi-check" onClick={saveEf} />
    </div>
  );

  const deleteEfDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button
        label="ไม่"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteEfDialog}
      />
      <Button
        label="ใช่"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteEf}
      />
    </div>
  );

  const deleteEfsDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button
        label="ไม่"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteEfsDialog}
      />
      <Button
        label="ใช่"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedEfs}
      />
    </div>
  );

  // Header สำหรับตาราง
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

          <Dialog
            visible={efDialog}
            style={{ width: "500px" }}
            header="รายละเอียด EF"
            modal
            className="p-fluid"
            footer={efDialogFooter}
            onHide={hideDialog}
          >
            <div className="field mt-3">
              <label htmlFor="item" className="font-bold">
                รายการ *
              </label>
              <InputText
                id="item"
                value={ef.item}
                onChange={(e) => onInputChange(e, "item")}
                required
                autoFocus
                className={classNames({ "p-invalid": submitted && !ef.item })}
                placeholder="กรอกรายการ"
              />
              {submitted && !ef.item && (
                <small className="p-error">จำเป็นต้องกรอกรายการ</small>
              )}
            </div>
            <div className="field mt-3">
              <label htmlFor="item_detail" className="font-bold">
                รายละเอียด
              </label>
              <InputTextarea
                id="item_detail"
                value={ef.item_detail}
                onChange={(e) => onInputChange(e, "item_detail")}
                rows={3}
                placeholder="กรอกรายละเอียด"
              />
            </div>
            <div className="field mt-3">
              <label htmlFor="unit" className="font-bold">
                หน่วย
              </label>
              <InputText
                id="unit"
                value={ef.unit}
                onChange={(e) => onInputChange(e, "unit")}
                placeholder="กรอกหน่วย"
              />
            </div>
            <div className="field mt-3">
              <label htmlFor="ef" className="font-bold">
                ค่า EF
              </label>
              <InputText
                id="ef"
                value={ef.ef}
                onChange={(e) => onInputChange(e, "ef")}
                placeholder="กรอกค่า EF"
              />
            </div>
            <div className="field mt-3">
              <label htmlFor="ef_source_ref" className="font-bold">
                ที่มา
              </label>
              <InputText
                id="ef_source_ref"
                value={ef.ef_source_ref}
                onChange={(e) => onInputChange(e, "ef_source_ref")}
                placeholder="กรอกที่มา"
              />
            </div>
          </Dialog>

          <Dialog
            visible={deleteEfDialog}
            style={{ width: "450px" }}
            header="ยืนยันการลบ"
            modal
            footer={deleteEfDialogFooter}
            onHide={hideDeleteEfDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem", color: "var(--red-500)" }}
              />
              {ef && (
                <span>
                  คุณแน่ใจหรือไม่ว่าต้องการลบ <b>{ef.item}</b>?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteEfsDialog}
            style={{ width: "450px" }}
            header="ยืนยันการลบ"
            modal
            footer={deleteEfsDialogFooter}
            onHide={hideDeleteEfsDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem", color: "var(--red-500)" }}
              />
              <span>
                คุณแน่ใจหรือไม่ว่าต้องการลบ {selectedEfs.length} รายการที่เลือก?
              </span>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default TGO;
