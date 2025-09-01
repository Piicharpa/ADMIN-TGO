"use client";
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import AddEditDialog from "../../../../(full-page)/component/dialog/verifier";
import DeleteDialog from "../../../../(full-page)/component/dialog/Delete";
import { VerifierService } from "@/demo/service/VerifierService";

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
  status: "pending" | "successful";
}

const emptyVerifier: Verifier = {
  auditor_id: 0,
  user_id: 0,
  name: "",
  register_id: "",
  description: "",
  expertise: "",
  organization: "",
  address: "",
  subdistrict_id: 0,
  district_id: 0,
  province_id: 0,
  zipcode: 0,
  phone_number: "",
  registration_date: "",
  created_date: "",
  updated_date: "",
  prefix_name: "",
  status: "pending",
};

const VerifierApp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [verifiers, setVerifiers] = useState<Verifier[]>([]);
  const [selectedVerifiers, setSelectedVerifiers] = useState<Verifier[] | null>(
    null
  );
  const [verifier, setVerifier] = useState<Verifier>(emptyVerifier);
  const [submitted, setSubmitted] = useState(false);
  const [verifierDialog, setVerifierDialog] = useState(false);
  const [viewDialog, setViewDialog] = useState(false);
  const [deleteVerifierDialog, setDeleteVerifierDialog] = useState(false);
  const [deleteVerifiersDialog, setDeleteVerifiersDialog] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useRef<Toast>(null);

  const tabOptions = [
    { label: "ทั้งหมด", value: 0 },
    { label: "รอการพิจารณา", value: 1 },
    { label: "ได้รับการพิจารณาแล้ว", value: 2 },
  ];

  useEffect(() => {
    fetchData(activeIndex);
  }, [activeIndex]);

  const fetchData = (tabIndex: number) => {
    setLoading(true);
    VerifierService.getVerifiers()
      .then((data) => {
        const filtered =
          tabIndex === 1
            ? data.filter((v: Verifier) => v.status === "pending")
            : tabIndex === 2
            ? data.filter((v: Verifier) => v.status === "successful")
            : data;
        setVerifiers(filtered);
      })
      .catch(() => {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "Cannot fetch data",
        });
      })
      .finally(() => setLoading(false));
  };

  const saveVerifier = () => {
    setSubmitted(true);
    if (!verifier.name || !verifier.register_id) return;

    const service = verifier.auditor_id
      ? VerifierService.updateVerifier(verifier)
      : VerifierService.createVerifier(verifier);

    service
      .then(() => {
        fetchData(activeIndex);
        setVerifierDialog(false);
        setVerifier(emptyVerifier);
        toast.current?.show({ severity: "success", summary: "สำเร็จ" });
      })
      .catch(() =>
        toast.current?.show({ severity: "error", summary: "เกิดข้อผิดพลาด" })
      );
  };

  const editVerifier = (v: Verifier) => {
    fetchData(activeIndex);
    setVerifier({ ...v });
    setVerifierDialog(true);
  };

  const viewVerifier = (v: Verifier) => {
    setVerifier({ ...v });
    setViewDialog(true);
  };

  const confirmDeleteVerifier = (v: Verifier) => {
    setVerifier(v);
    setDeleteVerifierDialog(true);
  };

  const deleteVerifier = () => {
    VerifierService.deleteVerifier(verifier.auditor_id).then(() => {
      fetchData(activeIndex);
      setDeleteVerifierDialog(false);
      setVerifier(emptyVerifier);
    });
  };

  const deleteSelectedVerifiers = () => {
    if (!selectedVerifiers) return;
    Promise.all(
      selectedVerifiers.map((v) => VerifierService.deleteVerifier(v.auditor_id))
    ).then(() => {
      fetchData(activeIndex);
      setDeleteVerifiersDialog(false);
      setSelectedVerifiers(null);
    });
  };

  const filteredVerifiers = verifiers.filter((v) =>
    v.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="card">
      <Toast ref={toast} />

      <div className="flex justify-content-between mb-4">
        <h5>ผู้ทวนสอบ</h5>
        <InputText
          placeholder="ค้นหาชื่อ..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>

      <SelectButton
        value={activeIndex}
        onChange={(e) => setActiveIndex(e.value)}
        options={tabOptions}
        optionLabel="label"
        className="mb-4"
      />

      <DataTable
        value={filteredVerifiers}
        selection={selectedVerifiers}
        onSelectionChange={(e) =>
          setSelectedVerifiers(e.value as Verifier[] | null)
        }
        dataKey="auditor_id"
        paginator
        rows={10}
        loading={loading}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column field="name" header="ชื่อผู้ทวนสอบ"></Column>
        <Column field="register_id" header="รหัสการลงทะเบียน"></Column>
        <Column field="registration_date" header="วันที่ลงทะเบียน"></Column>
        <Column
          body={(rowData) => (
            <>
              <Button
                icon="pi pi-eye"
                rounded
                severity="info"
                className="mr-2"
                onClick={() => viewVerifier(rowData)}
              />
              <Button
                icon="pi pi-pencil"
                rounded
                severity="success"
                className="mr-2"
                onClick={() => editVerifier(rowData)}
              />
              <Button
                icon="pi pi-trash"
                rounded
                severity="danger"
                onClick={() => confirmDeleteVerifier(rowData)}
              />
            </>
          )}
        ></Column>
      </DataTable>

      {/* Add/Edit Dialog */}
      <AddEditDialog
        visible={verifierDialog}
        verifier={verifier}
        submitted={submitted}
        onHide={() => setVerifierDialog(false)}
        onSave={saveVerifier}
        onChange={(e, name) =>
          setVerifier({
            ...verifier,
            [name]: "value" in e ? e.value : e.target.value,
          })
        }
      />

      {/* View Dialog */}
      <Dialog
        visible={viewDialog}
        header="รายละเอียดผู้ทวนสอบ"
        modal
        onHide={() => setViewDialog(false)}
      >
        <p>
          <b>รหัสผู้ทวนสอบ:</b> {verifier.auditor_id}
        </p>
        <p>
          <b>ชื่อ:</b> {verifier.name}
        </p>
        <p>
          <b>รหัสลงทะเบียน:</b> {verifier.register_id}
        </p>
        <p>
          <b>วันที่ลงทะเบียน:</b> {verifier.registration_date}
        </p>
        <p>
          <b>อีเมล:</b> {verifier.description}
        </p>
        <p>
          <b>ความเชี่ยวชาญ:</b> {verifier.expertise}
        </p>
        <p>
          <b>องค์กร:</b> {verifier.organization}
        </p>
        <p>
          <b>ที่อยู่:</b> {verifier.address}
        </p>
      </Dialog>

      {/* Delete Dialog */}
      <DeleteDialog
        visible={deleteVerifierDialog}
        onHide={() => setDeleteVerifierDialog(false)}
        onConfirm={deleteVerifier}
        message={`คุณแน่ใจว่าจะลบ ${verifier.name}?`}
      />
      <DeleteDialog
        visible={deleteVerifiersDialog}
        onHide={() => setDeleteVerifiersDialog(false)}
        onConfirm={deleteSelectedVerifiers}
        message={`คุณแน่ใจว่าจะลบ ${selectedVerifiers?.length} รายการ?`}
      />
    </div>
  );
};

export default VerifierApp;
