"use client";
import React from "react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";
import { CompanyService } from "@/demo/service/CompanyService";
import AddEditDialog from "@/app/(full-page)/component/dialog/company";
import type { Demo } from "@/types";

type Company = Demo.Company;

const CompanyPage = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [viewDialog, setViewDialog] = useState(false);
  const [globalFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [passwordData, setPasswordData] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const toast = useRef<Toast>(null);

  const filteredCompany = companies.filter((company) =>
    company.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const actionBodyTemplate = (rowData: Company) => (
    <div className="flex gap-1">
      <Button
        icon="pi pi-eye"
        rounded
        severity="info"
        onClick={() => {
          setSelectedCompany(rowData);
          setViewDialog(true);
        }}
      />
      <Button
        rounded
        icon="pi pi-pencil"
        severity="success"
        onClick={() => setDialogVisible(true)}
      />
    </div>
  );

  useEffect(() => {
    CompanyService.getCompanies()
      .then(setCompanies)
      .catch(() =>
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "Could not fetch companies",
          life: 3000,
        })
      );
  }, []);

  return (
    <div className="grid company-demo">
      <div className="col-12">
        <div className="card">
          <Toast ref={toast} />
          <div className="flex justify-content-between align-items-center mb-4">
            <h5>บริษัท</h5>
            <span className="p-input-icon-left mr-3">
              <i className="pi pi-search" />
              <InputText
                type="search"
                placeholder="ค้นหาด้วยชื่อบริษัท..."
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                className="w-full"
              />
            </span>
          </div>

          <DataTable
            value={filteredCompany}
            globalFilter={globalFilter}
            emptyMessage="No companies found"
          >
            <Column
              field="index"
              header="ลำดับ"
              body={(_, { rowIndex }) => rowIndex + 1}
              style={{ width: "100px" }}
            />
            <Column field="name" header="ชื่อบริษัท" sortable />
            <Column field="address" header="ที่อยู่" sortable />
            <Column field="id" header="รหัส" sortable />
            <Column
              body={actionBodyTemplate}
              header="การดำเนินการ"
              headerStyle={{ width: "100px" }}
              bodyStyle={{ textAlign: "center" }}
            ></Column>
          </DataTable>

          <Dialog
            visible={viewDialog}
            style={{ width: "800px" }}
            header="Company Products"
            modal
            footer={
              <Button
                label="Close"
                icon="pi pi-times"
                onClick={() => setViewDialog(false)}
              />
            }
            onHide={() => setViewDialog(false)}
          >
            {selectedCompany && (
              <>
                <h5>{selectedCompany.name}'s Products</h5>
                <DataTable
                  value={selectedCompany.products}
                  paginator
                  rows={5}
                  emptyMessage="No products found."
                >
                  <Column field="id" header="รหัสผลิตภัณฑ์" sortable />
                  <Column field="name" header="ชื่อผลิตภัณฑ์" sortable />
                  <Column field="status" header="สถานะ" sortable />
                </DataTable>
              </>
            )}
          </Dialog>

          <AddEditDialog
            visible={dialogVisible}
            onHide={() => setDialogVisible(false)}
            onSave={(password) => {
              setSubmitted(true);
              if (
                passwordData.password &&
                passwordData.password === passwordData.confirmPassword &&
                selectedCompany
              ) {
                CompanyService.putCompanyPass(selectedCompany.user_id, password)
                  .then(() => {
                    toast.current?.show({
                      severity: "success",
                      summary: "Success",
                      detail: "เปลี่ยนรหัสผ่านเรียบร้อย",
                      life: 3000,
                    });
                    setDialogVisible(false);
                  })
                  .catch(() => {
                    toast.current?.show({
                      severity: "error",
                      summary: "Error",
                      detail: "ไม่สามารถเปลี่ยนรหัสผ่านได้",
                      life: 3000,
                    });
                  });
              }
            }}
            passwordData={passwordData}
            setPasswordData={setPasswordData}
            submitted={submitted}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
