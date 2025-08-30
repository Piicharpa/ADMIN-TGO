"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { RoundService } from "@/demo/service/RoundService";
import type { Demo } from "@/types";

type Round = Demo.Round;

const Register_round = () => {
  const emptyRound: Round = {
    id: 0,
    quarter: "",
    start: "",
    end: "",
    status: 1,
  };
  
  const [rounds, setRounds] = useState<Round[]>([]);
  const [loading, setLoading] = useState(false);
  const [roundFilter, setRoundFilter] = useState("");  // Local state for round filtering
  const [roundDialog, setRoundDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteRoundsDialog, setDeleteRoundsDialog] = useState(false);
  const [currentRound, setCurrentRound] = useState<Round>(emptyRound);
  const [submitted, setSubmitted] = useState(false);
  const [selectedRounds, setSelectedRounds] = useState<Round[]>([]);
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<any>>(null);

  const fetchRounds = async () => {
    setLoading(true);
    try {
      const data = await RoundService.getRounds();
      setRounds(data);
    } catch (error) {
      console.error("Fetch rounds error:", error);
      toast.current?.show({
        severity: "error",
        summary: "ผิดพลาด",
        detail: "โหลดข้อมูลไม่สำเร็จ",
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRounds();
  }, []);

  const openNew = () => {
    setCurrentRound(emptyRound);
    setSubmitted(false);
    setRoundDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setRoundDialog(false);
    setCurrentRound(emptyRound);
  };

  const hideDeleteDialog = () => {
    setDeleteDialog(false);
  };

  const hideDeleteRoundsDialog = () => {
    setDeleteRoundsDialog(false);
  };

  const saveRound = async () => {
    setSubmitted(true);
    if (!currentRound.quarter.trim()) return;
    setLoading(true);
    try {
      if (currentRound.id && currentRound.id !== 0) {
        // update
        const updated = await RoundService.updateRound(currentRound.id, currentRound);
        setRounds((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
        toast.current?.show({
          severity: "success",
          summary: "สำเร็จ",
          detail: "แก้ไขรอบแล้ว",
          life: 3000,
        });
      } else {
        // create
        const maxId = rounds.length ? Math.max(...rounds.map((r) => r.id)) : 0;
        const roundToCreate = { ...currentRound, id: maxId + 1 };
        const created = await RoundService.createRound(roundToCreate);
        setRounds((prev) => [...prev, created]);
        toast.current?.show({
          severity: "success",
          summary: "สำเร็จ",
          detail: "เพิ่มรอบแล้ว",
          life: 3000,
        });
      }
      setRoundDialog(false);
      setCurrentRound(emptyRound);
      setSubmitted(false);
    } catch (error) {
      console.error(error);
      toast.current?.show({
        severity: "error",
        summary: "ผิดพลาด",
        detail: "บันทึกรอบไม่สำเร็จ",
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteRound = async () => {
    if (!currentRound.id) return;
    setLoading(true);
    try {
      await RoundService.deleteRound(currentRound.id);
      setRounds(rounds.filter((r) => r.id !== currentRound.id));
      toast.current?.show({
        severity: "success",
        summary: "สำเร็จ",
        detail: "ลบรอบแล้ว",
        life: 3000,
      });
    } catch (error) {
      console.error(error);
      toast.current?.show({
        severity: "error",
        summary: "ผิดพลาด",
        detail: "ไม่สามารถลบรอบได้",
        life: 3000,
      });
    } finally {
      setDeleteDialog(false);
      setCurrentRound(emptyRound);
      setLoading(false);
    }
  };

  // Confirm delete for a specific round
  const confirmDelete = (round: Round) => {
    setCurrentRound(round); // Set the current round to delete
    setDeleteDialog(true); // Open the delete confirmation dialog
  };

  // Edit a specific round
  const editRound = (round: Round) => {
    setCurrentRound({ ...round }); // Set the selected round
    setRoundDialog(true); // Open the dialog for editing
  };

  // Filter rounds based on the entered quarter name
  const filteredRounds = rounds.filter(round => 
    round.quarter.toLowerCase().includes(roundFilter.toLowerCase())
  );

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card p-4">
          <Toast ref={toast} />
          <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-3 mb-4">
            <h2 className="m-0">จัดการรอบลงทะเบียน</h2>
            <div className="flex flex-column md:flex-row gap-3 w-full md:w-auto">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  type="search"
                  onInput={(e) => setRoundFilter(e.currentTarget.value)} // Set the local filter state
                  placeholder="ค้นหารอบ..."
                  className="w-full"
                />
              </span>
              <Button
                label="เพิ่มรอบ"
                icon="pi pi-plus"
                severity="success"
                onClick={openNew}
              />
            </div>
          </div>
          <DataTable
            ref={dt}
            value={filteredRounds} // Use the filtered rounds instead of the full list
            selection={selectedRounds}
            onSelectionChange={(e) => setSelectedRounds(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            emptyMessage="ไม่พบข้อมูล"
            loading={loading}
            responsiveLayout="scroll"
            className="mt-4"
          >
            <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
            <Column field="quarter" header="รอบ" sortable style={{ width: "200px" }} />
            <Column field="start" header="วันเริ่มต้น" sortable style={{ width: "150px" }} />
            <Column field="end" header="วันสิ้นสุด" sortable style={{ width: "150px" }} />
            <Column
              field="status"
              header="สถานะ"
              sortable
              body={(rowData: Round) => (
                <span className={`p-tag p-component p-tag-${rowData.status === 1 ? "success" : "danger"}`}>
                  {rowData.status === 1 ? "ใช้งาน" : "ไม่ใช้งาน"}
                </span>
              )}
              style={{ width: "150px" }}
            />
            <Column
              body={(rowData: Round) => (
                <div className="flex gap-1">
                  <Button
                    icon="pi pi-pencil"
                    rounded
                    severity="success"
                    onClick={() => editRound(rowData)}
                    tooltip="แก้ไข"
                    tooltipOptions={{ position: "top" }}
                  />
                  <Button
                    icon="pi pi-trash"
                    rounded
                    severity="danger"
                    onClick={() => confirmDelete(rowData)}
                    tooltip="ลบ"
                    tooltipOptions={{ position: "top" }}
                  />
                </div>
              )}
              header="การดำเนินการ"
              headerStyle={{ width: "100px" }}
              bodyStyle={{ textAlign: "center" }}
            ></Column>
          </DataTable>
          {/* Additional Dialogs and Code Here */}
        </div>
      </div>
    </div>
  );
};

export default Register_round;