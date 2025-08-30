"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";
import type { Demo } from "@/types";
import { IndustrialService } from "@/demo/service/IndustrialService";

type Industrial = Demo.Industrial;

const IndustrialPage = () => {
  const [industrials, setIndustrials] = useState<Industrial[]>([]);
  const [industrial, setIndustrial] = useState<Industrial | null>(null);
  const [selectedIndustrials, setSelectedIndustrials] = useState<
    Industrial[] | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [industrialDialog, setIndustrialDialog] = useState(false);
  const [deleteIndustrialDialog, setDeleteIndustrialDialog] = useState(false);
  const [deleteIndustrialsDialog, setDeleteIndustrialsDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<any>>(null);

  const emptyIndustrial: Industrial = {
    industrial_id: 0,
    industrial_name: "",
    required_cbam: 0,
  };

  const cbamOptions = [
    { label: "มี", value: 1 },
    { label: "ไม่มี", value: 0 },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await IndustrialService.getIndustrials();
      setIndustrials(data);
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
  const filteredIndustrials = industrials.filter((industrial) =>
    industrial.industrial_name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const openNew = () => {
    setIndustrial({ ...emptyIndustrial });
    setSubmitted(false);
    setIndustrialDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setIndustrialDialog(false);
    setIndustrial(null);
  };

  const hideDeleteIndustrialDialog = () => setDeleteIndustrialDialog(false);
  const hideDeleteIndustrialsDialog = () => setDeleteIndustrialsDialog(false);

  const saveIndustrial = async () => {
    setSubmitted(true);
    if (!industrial || !industrial.industrial_name.trim()) return;

    setLoading(true);
    try {
      if (industrial.industrial_id && industrial.industrial_id > 0) {
        // update
        const updated = await IndustrialService.updateUnit(industrial);
        setIndustrials((prev) =>
          prev.map((i) =>
            i.industrial_id === updated.industrial_id ? updated : i
          )
        );
        toast.current?.show({
          severity: "success",
          summary: "สำเร็จ",
          detail: "แก้ไขข้อมูลแล้ว",
          life: 3000,
        });
      } else {
        // create
        const created = await IndustrialService.createIndustrial(industrial);
        setIndustrials((prev) => [...prev, created]);
        toast.current?.show({
          severity: "success",
          summary: "สำเร็จ",
          detail: "เพิ่มอุตสาหกรรมแล้ว",
          life: 3000,
        });
      }
      setIndustrialDialog(false);
      setIndustrial(null);
      setSubmitted(false);
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

  const editIndustrial = (i: Industrial) => {
    setIndustrial({ ...i });
    setIndustrialDialog(true);
  };

  const confirmDeleteIndustrial = (i: Industrial) => {
    setIndustrial(i);
    setDeleteIndustrialDialog(true);
  };

  const deleteIndustrial = async () => {
    if (!industrial) return;
    setLoading(true);
    try {
      await IndustrialService.deleteUnit(industrial.industrial_id);
      setIndustrials((prev) =>
        prev.filter((i) => i.industrial_id !== industrial.industrial_id)
      );
      toast.current?.show({
        severity: "success",
        summary: "สำเร็จ",
        detail: "ลบอุตสาหกรรมแล้ว",
        life: 3000,
      });
      setIndustrial(null);
      setDeleteIndustrialDialog(false);
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

  const deleteSelectedIndustrials = async () => {
    if (!selectedIndustrials) return;
    setLoading(true);
    try {
      await Promise.all(
        selectedIndustrials.map((i) =>
          IndustrialService.deleteUnit(i.industrial_id)
        )
      );
      setIndustrials((prev) =>
        prev.filter((i) => !selectedIndustrials.includes(i))
      );
      toast.current?.show({
        severity: "success",
        summary: "สำเร็จ",
        detail: "ลบรายการที่เลือกแล้ว",
        life: 3000,
      });
      setSelectedIndustrials(null);
      setDeleteIndustrialsDialog(false);
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
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const val = e.target.value;
    setIndustrial((prev) => (prev ? { ...prev, [name]: val } : null));
  };

  const onDropdownChange = (e: { value: any }, name: string) => {
    const val = e.value;
    setIndustrial((prev) => (prev ? { ...prev, [name]: val } : null));
  };

  const actionBodyTemplate = (rowData: Industrial) => (
    <div className="flex gap-1">
      <Button
        icon="pi pi-pencil"
        rounded
        severity="success"
        onClick={() => editIndustrial(rowData)}
        tooltip="แก้ไข"
        tooltipOptions={{ position: 'top' }}
      />
      <Button
        icon="pi pi-trash"
        rounded
        severity="danger"
        onClick={() => confirmDeleteIndustrial(rowData)}
        tooltip="ลบ"
        tooltipOptions={{ position: 'top' }}
      />
    </div>
  );

  const industrialDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button label="ยกเลิก" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="บันทึก" icon="pi pi-check" onClick={saveIndustrial} />
    </div>
  );

  const deleteIndustrialDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button
        label="ไม่"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteIndustrialDialog}
      />
      <Button label="ใช่" icon="pi pi-check" severity="danger" onClick={deleteIndustrial} />
    </div>
  );

  const deleteIndustrialsDialogFooter = (
    <div className="flex justify-end gap-2">
      <Button
        label="ไม่"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteIndustrialsDialog}
      />
      <Button
        label="ใช่"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedIndustrials}
      />
    </div>
  );

  // Header สำหรับตาราง
  const renderHeader = () => {
    return (
      <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-3">
        <h2 className="m-0">จัดการอุตสาหกรรม</h2>
        <div className="flex flex-column md:flex-row gap-3 w-full md:w-auto">
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
            label="เพิ่มอุตสาหกรรม"
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
            value={filteredIndustrials}
            selection={selectedIndustrials}
            onSelectionChange={(e: { value: Industrial[] }) =>
              setSelectedIndustrials(e.value)
            }
            dataKey="industrial_id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            globalFilter={globalFilter}
            emptyMessage="ไม่พบข้อมูล"
            loading={loading}
            responsiveLayout="scroll"
            className="mt-4"
            header={selectedIndustrials && selectedIndustrials.length > 0 ? (
              <div className="flex justify-content-between align-items-center">
                <span>{`เลือก ${selectedIndustrials.length} รายการ`}</span>
                <Button
                  label="ลบที่เลือก"
                  icon="pi pi-trash"
                  severity="danger"
                  onClick={() => setDeleteIndustrialsDialog(true)}
                />
              </div>
            ) : null}
            selectionMode={selectedIndustrials ? 'checkbox' : null}
          >
            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            <Column
              field="index"
              header="ลำดับ"
              body={(_, { rowIndex }) => rowIndex + 1}
              style={{ width: '100px' }}
            />

            <Column
              field="industrial_name"
              header="ชื่ออุตสาหกรรม"
              style={{ width: '200px' }}
            ></Column>
            <Column
              field="required_cbam"
              header="มี CBAM หรือไม่"
              sortable
              body={(rowData: Industrial) => rowData.required_cbam === 1 ? "มี" : "ไม่มี"}
              style={{ width: '150px' }}
            />
            <Column
              body={actionBodyTemplate}
              header="การดำเนินการ"
              headerStyle={{ width: '100px' }}
              bodyStyle={{ textAlign: 'center' }}
            ></Column>
          </DataTable>

          {/* Dialog เพิ่ม/แก้ไข */}
          <Dialog
            visible={industrialDialog}
            style={{ width: "450px" }}
            header="รายละเอียดอุตสาหกรรม"
            modal
            className="p-fluid"
            footer={industrialDialogFooter}
            onHide={hideDialog}
          >
            <div className="field mt-3">
              <label htmlFor="industrial_name" className="font-bold">ชื่ออุตสาหกรรม *</label>
              <InputText
                id="industrial_name"
                value={industrial?.industrial_name || ""}
                onChange={(e) => onInputChange(e, "industrial_name")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && !industrial?.industrial_name,
                })}
                placeholder="กรอกชื่ออุตสาหกรรม"
              />
              {submitted && !industrial?.industrial_name && (
                <small className="p-error">จำเป็นต้องกรอกชื่ออุตสาหกรรม</small>
              )}
            </div>
            <div className="field mt-3">
              <label htmlFor="required_cbam" className="font-bold">มี CBAM หรือไม่ *</label>
              <Dropdown
                id="required_cbam"
                value={industrial?.required_cbam}
                options={cbamOptions}
                onChange={(e) => onDropdownChange(e, "required_cbam")}
                optionLabel="label"
                optionValue="value"
                placeholder="เลือกสถานะ CBAM"
                className={classNames({
                  "p-invalid": submitted && industrial?.required_cbam === undefined,
                })}
              />
              {submitted && industrial?.required_cbam === undefined && (
                <small className="p-error">จำเป็นต้องเลือกสถานะ CBAM</small>
              )}
            </div>
          </Dialog>

          {/* Dialog ลบ 1 */}
          <Dialog
            visible={deleteIndustrialDialog}
            style={{ width: "450px" }}
            header="ยืนยันการลบ"
            modal
            footer={deleteIndustrialDialogFooter}
            onHide={hideDeleteIndustrialDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem", color: "var(--red-500)" }}
              />
              {industrial && (
                <span>
                  คุณแน่ใจหรือไม่ว่าต้องการลบ{" "}
                  <b>{industrial.industrial_name}</b>?
                </span>
              )}
            </div>
          </Dialog>

          {/* Dialog ลบหลายรายการ */}
          <Dialog
            visible={deleteIndustrialsDialog}
            style={{ width: "450px" }}
            header="ยืนยันการลบ"
            modal
            footer={deleteIndustrialsDialogFooter}
            onHide={hideDeleteIndustrialsDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem", color: "var(--red-500)" }}
              />
              <span>คุณแน่ใจหรือไม่ว่าต้องการลบ {selectedIndustrials?.length} รายการที่เลือก?</span>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default IndustrialPage;