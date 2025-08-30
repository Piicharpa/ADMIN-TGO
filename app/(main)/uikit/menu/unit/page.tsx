"use client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import React, { useEffect, useRef, useState } from "react";
import { UnitService } from "@/demo/service/UnitService";
import type { Demo } from "@/types";

type Unit = Demo.Unit;

const UnitPage = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [unit, setUnit] = useState<Unit | null>(null);
  const [selectedUnits, setSelectedUnits] = useState<Unit[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [unitDialog, setUnitDialog] = useState(false);
  const [deleteUnitDialog, setDeleteUnitDialog] = useState(false);
  const [deleteUnitsDialog, setDeleteUnitsDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<any>>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await UnitService.getUnits();
      setUnits(data);
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "ไม่สามารถโหลดข้อมูลได้",
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  // กรองข้อมูลตามชื่อ
  const filteredUnits = units.filter((unit) =>
    unit.product_unit_name_th.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const openNew = () => {
    setUnit({
      product_unit_id: 0,
      product_unit_name_th: "",
      product_unit_name_en: "",
      product_unit_abbr_th: "",
      product_unit_abbr_eng: "",
    });
    setSubmitted(false);
    setUnitDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setUnitDialog(false);
  };

  const hideDeleteUnitDialog = () => setDeleteUnitDialog(false);
  const hideDeleteUnitsDialog = () => setDeleteUnitsDialog(false);

  const saveUnit = async () => {
    setSubmitted(true);
    if (!unit || !unit.product_unit_name_th.trim()) return;

    setLoading(true);
    try {
      if (unit.product_unit_id && unit.product_unit_id > 0) {
        const updated = await UnitService.updateUnit(unit);
        setUnits(
          units.map((u) =>
            u.product_unit_id === updated.product_unit_id ? updated : u
          )
        );
        toast.current?.show({
          severity: "success",
          summary: "สำเร็จ",
          detail: "แก้ไขข้อมูลแล้ว",
          life: 3000,
        });
      } else {
        const created = await UnitService.createUnit(unit);
        setUnits([...units, created]);
        toast.current?.show({
          severity: "success",
          summary: "สำเร็จ",
          detail: "เพิ่มหน่วยแล้ว",
          life: 3000,
        });
      }
      setUnitDialog(false);
      setUnit(null);
    } catch (error) {
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

  const editUnit = (u: Unit) => {
    setUnit({ ...u });
    setUnitDialog(true);
  };

  const confirmDeleteUnit = (u: Unit) => {
    setUnit(u);
    setDeleteUnitDialog(true);
  };

  const deleteUnit = async () => {
    if (!unit) return;
    setLoading(true);
    try {
      await UnitService.deleteUnit(unit.product_unit_id);
      setUnits(units.filter((u) => u.product_unit_id !== unit.product_unit_id));
      toast.current?.show({
        severity: "success",
        summary: "สำเร็จ",
        detail: "ลบข้อมูลแล้ว",
        life: 3000,
      });
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "เกิดข้อผิดพลาด",
        life: 3000,
      });
    } finally {
      setDeleteUnitDialog(false);
      setUnit(null);
      setLoading(false);
    }
  };

  const deleteSelectedUnits = async () => {
    if (!selectedUnits) return;
    setLoading(true);
    try {
      await Promise.all(
        selectedUnits.map((u) => UnitService.deleteUnit(u.product_unit_id))
      );
      setUnits(units.filter((u) => !selectedUnits.includes(u)));
      toast.current?.show({
        severity: "success",
        summary: "สำเร็จ",
        detail: "ลบข้อมูลที่เลือกแล้ว",
        life: 3000,
      });
    } catch {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "เกิดข้อผิดพลาด",
        life: 3000,
      });
    } finally {
      setDeleteUnitsDialog(false);
      setSelectedUnits(null);
      setLoading(false);
    }
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const val = e.target.value;
    setUnit((prev) => (prev ? { ...prev, [name]: val } : null));
  };

  const actionBodyTemplate = (rowData: Unit) => (
    <div className="flex gap-1">
      <Button
        icon="pi pi-pencil"
        rounded
        severity="success"
        onClick={() => editUnit(rowData)}
        tooltip="แก้ไข"
        tooltipOptions={{ position: "top" }}
      />
      <Button
        icon="pi pi-trash"
        rounded
        severity="danger"
        onClick={() => confirmDeleteUnit(rowData)}
        tooltip="ลบ"
        tooltipOptions={{ position: "top" }}
      />
    </div>
  );

  const unitDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button label="ยกเลิก" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="บันทึก" icon="pi pi-check" onClick={saveUnit} />
    </div>
  );

  const deleteUnitDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button
        label="ไม่"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteUnitDialog}
      />
      <Button
        label="ใช่"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteUnit}
      />
    </div>
  );

  const deleteUnitsDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button
        label="ไม่"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteUnitsDialog}
      />
      <Button
        label="ใช่"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedUnits}
      />
    </div>
  );

  // Header สำหรับตาราง
  const renderHeader = () => {
    return (
      <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-3">
        <h2 className="m-0">จัดการหน่วย</h2>
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
            label="เพิ่มหน่วย"
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
            value={filteredUnits}
            selection={selectedUnits}
            onSelectionChange={(e: { value: Unit[] }) =>
              setSelectedUnits(e.value)
            }
            dataKey="product_unit_id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            globalFilter={globalFilter}
            emptyMessage="ไม่พบข้อมูล"
            loading={loading}
            responsiveLayout="scroll"
            className="mt-4"
            header={
              selectedUnits && selectedUnits.length > 0 ? (
                <div className="flex justify-content-between align-items-center">
                  <span>{`เลือก ${selectedUnits.length} รายการ`}</span>
                  <Button
                    label="ลบที่เลือก"
                    icon="pi pi-trash"
                    severity="danger"
                    onClick={() => setDeleteUnitsDialog(true)}
                  />
                </div>
              ) : null
            }
            selectionMode={selectedUnits ? "checkbox" : null}
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column
              field="index"
              header="ลำดับ"
              body={(_, { rowIndex }) => rowIndex + 1}
              style={{ width: "200px" }}
            />
            <Column
              field="product_unit_name_th"
              header="ชื่อหน่วยภาษาไทย"
              sortable
              style={{ width: "200px" }}
            ></Column>
            <Column
              field="product_unit_name_en"
              header="ชื่อหน่วยภาษาอังกฤษ"
              sortable
              style={{ width: "200px" }}
            ></Column>
            <Column
              field="product_unit_abbr_th"
              header="ชื่อย่อหน่วยภาษาไทย"
              sortable
              style={{ width: "200px" }}
            ></Column>
            <Column
              field="product_unit_abbr_eng"
              header="ชื่อย่อหน่วยภาษาอังกฤษ"
              sortable
              style={{ width: "200px" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              header="การดำเนินการ"
              headerStyle={{ width: "100px" }}
              bodyStyle={{ textAlign: "center" }}
            ></Column>
          </DataTable>

          <Dialog
            visible={unitDialog}
            style={{ width: "500px" }}
            header="รายละเอียดหน่วย"
            modal
            className="p-fluid"
            footer={unitDialogFooter}
            onHide={hideDialog}
          >
            <div className="field mt-3">
              <label htmlFor="product_unit_name_th" className="font-bold">
                ชื่อหน่วย (TH) *
              </label>
              <InputText
                id="product_unit_name_th"
                value={unit?.product_unit_name_th || ""}
                onChange={(e) => onInputChange(e, "product_unit_name_th")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && !unit?.product_unit_name_th,
                })}
                placeholder="กรอกชื่อหน่วย"
              />
              {submitted && !unit?.product_unit_name_th && (
                <small className="p-error">จำเป็นต้องกรอกชื่อ</small>
              )}
            </div>
            <div className="field mt-3">
              <label htmlFor="product_unit_abbr_th" className="font-bold">
                รหัสย่อ (TH)
              </label>
              <InputText
                id="product_unit_abbr_th"
                value={unit?.product_unit_abbr_th || ""}
                onChange={(e) => onInputChange(e, "product_unit_abbr_th")}
                placeholder="กรอกรหัสย่อ"
              />
            </div>
          </Dialog>

          <Dialog
            visible={deleteUnitDialog}
            style={{ width: "450px" }}
            header="ยืนยันการลบ"
            modal
            footer={deleteUnitDialogFooter}
            onHide={hideDeleteUnitDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem", color: "var(--red-500)" }}
              />
              {unit && (
                <span>
                  คุณแน่ใจหรือไม่ว่าต้องการลบ <b>{unit.product_unit_name_th}</b>
                  ?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteUnitsDialog}
            style={{ width: "450px" }}
            header="ยืนยันการลบ"
            modal
            footer={deleteUnitsDialogFooter}
            onHide={hideDeleteUnitsDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem", color: "var(--red-500)" }}
              />
              {selectedUnits && (
                <span>
                  คุณแน่ใจหรือไม่ว่าต้องการลบ {selectedUnits.length}{" "}
                  รายการที่เลือก?
                </span>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default UnitPage;
