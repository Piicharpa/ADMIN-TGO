"use client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import AddEditDialog from "../../../../(full-page)/component/dialog/pcr";
import DeleteDialog from "../../../../(full-page)/component/dialog/Delete";
import React, { useEffect, useRef, useState } from "react";
import { PCRService } from "@/demo/service/PCRService";
import type { Demo } from "@/types";
type PCR = Demo.PCR;

const PCRManagement = () => {
  const emptyPCR: PCR = {
    id: 0,
    pcr_name: "",
    approval_date: "",
    pcr_type: "",
    pcr_type_id: 0,
  };
  const [pcrs, setPCRs] = useState<PCR[]>([]);
  const [pcrDialog, setPCRDialog] = useState(false);
  const [selectedPCRs, setSelectedPCRs] = useState<PCR[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [deletePCRDialog, setDeletePCRDialog] = useState(false);
  const [deletePCRsDialog, setDeletePCRsDialog] = useState(false);
  const [pcr, setPCR] = useState<PCR>(emptyPCR);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<any>>(null);
  const fetchPCRs = async () => {
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
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPCRs();
  }, []);
  const filteredPCRs = pcrs.filter((pcr) =>
    pcr.pcr_name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  const openNew = () => {
    setPCR(emptyPCR);
    setSubmitted(false);
    setPCRDialog(true);
  };
  const hideDialog = () => {
    setSubmitted(false);
    setPCRDialog(false);
  };
  const hideDeletePCRDialog = () => {
    setDeletePCRDialog(false);
  };
  const hideDeletePCRsDialog = () => {
    setDeletePCRsDialog(false);
  };
  const savePCR = async () => {
    setSubmitted(true);
    if (pcr.pcr_name.trim()) {
      setLoading(true);
      try {
        // แปลงวันที่เป็น dd เดือน yyyy พ.ศ.
        const approvalDate =
          pcr.approval_date instanceof Date
            ? pcr.approval_date.toLocaleDateString("th-TH", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
            : pcr.approval_date;

        const payload = {
          pcr_name: pcr.pcr_name,
          approval_date: approvalDate, // ส่งเป็นสตริง พ.ศ.
          pcr_type: pcr.pcr_type,
          pcr_type_id: pcr.pcr_type_id,
        };

        if (pcr.id) {
          await PCRService.updatePCR(pcr.id, payload);
          toast.current?.show({
            severity: "success",
            summary: "สำเร็จ",
            detail: "อัปเดต PCR แล้ว",
            life: 3000,
          });
        } else {
          await PCRService.createPCR(payload);
          toast.current?.show({
            severity: "success",
            summary: "สำเร็จ",
            detail: "เพิ่ม PCR แล้ว",
            life: 3000,
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
          life: 3000,
        });
      } finally {
        setLoading(false);
      }
    }
  };
  const editPCR = (p: PCR) => {
    setPCR({ ...p });
    setPCRDialog(true);
  };
  const confirmDeletePCR = (p: PCR) => {
    setPCR(p);
    setDeletePCRDialog(true);
  };
  const deletePCR = async () => {
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
        life: 3000,
      });
    } catch (error) {
      console.error(error);
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
  const deleteSelectedPCRs = async () => {
    if (!selectedPCRs) return;
    setLoading(true);
    try {
      await Promise.all(
        selectedPCRs.map((pcr) => PCRService.deletePCR(pcr.id))
      );
      setPCRs((prev) => prev.filter((p) => !selectedPCRs.includes(p)));
      toast.current?.show({
        severity: "success",
        summary: "สำเร็จ",
        detail: "ลบรายการที่เลือกแล้ว",
        life: 3000,
      });
      setSelectedPCRs(null);
      setDeletePCRsDialog(false);
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
    e: React.ChangeEvent<HTMLInputElement> | { value: any },
    name: keyof PCR
  ) => {
    let val;
    if ("target" in e) {
      val = e.target.value; // สำหรับ InputText
    } else {
      val = e.value; // สำหรับ Calendar => Date object
    }
    setPCR({ ...pcr, [name]: val });
  };
  const actionBodyTemplate = (rowData: PCR) => (
    <div className="flex gap-1">
      <Button
        icon="pi pi-pencil"
        rounded
        severity="success"
        onClick={() => editPCR(rowData)}
        tooltip="แก้ไข"
        tooltipOptions={{ position: "top" }}
      />
      <Button
        icon="pi pi-trash"
        rounded
        severity="danger"
        onClick={() => confirmDeletePCR(rowData)}
        tooltip="ลบ"
        tooltipOptions={{ position: "top" }}
      />
    </div>
  );
  const renderHeader = () => {
    return (
      <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-3">
        <h2 className="m-0">จัดการ PCR</h2>
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
            label="เพิ่มข้อกำหนดผลิตภัณฑ์"
            icon="pi pi-plus"
            severity="success"
            onClick={openNew}
          />
        </div>
      </div>
    );
  };
  const formatDate = (value: string | Date) => {
    if (!value) return "";
    return new Date(value).toLocaleDateString("th-TH", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card p-4">
          <Toast ref={toast} />

          {renderHeader()}

          <DataTable
            ref={dt}
            value={filteredPCRs}
            selection={selectedPCRs}
            onSelectionChange={(e) => setSelectedPCRs(e.value as PCR[])}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            globalFilter={globalFilter}
            emptyMessage="ไม่พบข้อมูล"
            loading={loading}
            responsiveLayout="scroll"
            className="mt-4"
            header={
              selectedPCRs && selectedPCRs.length > 0 ? (
                <div className="flex justify-content-between align-items-center">
                  <span>{`เลือก ${selectedPCRs.length} รายการ`}</span>
                  <Button
                    label="ลบที่เลือก"
                    icon="pi pi-trash"
                    severity="danger"
                    onClick={() => setDeletePCRsDialog(true)}
                  />
                </div>
              ) : null
            }
            selectionMode="checkbox"
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
              field="pcr_name"
              header="ชื่อ PCR"
              sortable
              style={{ width: "300px" }}
            ></Column>
            <Column
              field="approval_date"
              header="วันที่อนุมัติ"
              sortable
              style={{ width: "150px" }}
            />
            <Column
              field="pcr_type"
              header="ประเภท"
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
            visible={pcrDialog}
            pcr={pcr}
            submitted={submitted}
            onHide={hideDialog}
            onChange={onInputChange}
            onSave={savePCR}
          />
          <DeleteDialog
            visible={deletePCRDialog}
            onHide={hideDeletePCRDialog}
            onConfirm={deletePCR}
            message={`คุณแน่ใจหรือไม่ว่าต้องการลบ ${pcr.pcr_name}?`}
          />
          <DeleteDialog
            visible={deletePCRsDialog}
            onHide={hideDeletePCRsDialog}
            onConfirm={deleteSelectedPCRs}
            message={`คุณแน่ใจหรือไม่ว่าต้องการลบ ${selectedPCRs?.length} รายการที่เลือก?`}
          />
        </div>
      </div>
    </div>
  );
};

export default PCRManagement;
