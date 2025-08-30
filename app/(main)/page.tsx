"use client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import React, { useContext, useEffect, useState } from "react";
import { DashboardService } from "@/demo/service/DashboardService";
import { LayoutContext } from "../../layout/context/layoutcontext";
import { Demo } from "@/types";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState<Demo.Dashboard | null>(null);
  const [viewDialog, setViewDialog] = useState(false);
  const [selectedCompany, setSelectedCompany] =
    useState<Demo.CompanyDetail | null>(null);
  const { layoutConfig } = useContext(LayoutContext);

  useEffect(() => {
    DashboardService.get()
      .then((data) => setDashboard(data))
      .catch((err) => console.error("Error fetching dashboard:", err));
  }, []);

  const companyDialogFooter = (
    <Button
      label="Close"
      icon="pi pi-times"
      onClick={() => setViewDialog(false)}
      className="p-button-text"
    />
  );

  

  return (
    <div className="grid">
      {/* Cards */}
      <div className="col-12 lg:col-6 xl:col-3">
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">
                ผู้ดูแลระบบ
              </span>
              <div className="text-900 font-medium text-md">นางสาวกัญญลักษณ์ ธนสุนทรวงศ์</div>

              {/* <div className="text-900 font-medium text-xl">{dashboard?.adminName ?? '...'}</div> */}
            </div>
            <div
              className="flex align-items-center justify-content-center bg-blue-100 border-round"
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <i className="pi pi-pencil text-blue-500 text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 lg:col-6 xl:col-3">
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">
                จำนวนบริษัททั้งหมด
              </span>
              <div className="text-900 font-medium text-xl">
                {dashboard?.company_total ?? "..."}
              </div>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-orange-100 border-round"
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <i className="pi pi-building text-orange-500 text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 lg:col-6 xl:col-3">
        <div className="card mb-0">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">
                จำนวนผลิตภัณฑ์ทั้งหมด
              </span>
              <div className="text-900 font-medium text-xl">
                {dashboard?.product_total ?? "..."}
              </div>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-cyan-100 border-round"
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <i className="pi pi-inbox text-cyan-500 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Company list */}
      <div className="col-12 full">
        <div className="card">
          <h5>Company list</h5>
          <DataTable
            value={dashboard?.company_detail || []}
            rows={5}
            paginator
            responsiveLayout="scroll"
          >
            <Column
              field="name"
              header="ชื่อบริษัท"
              sortable
              style={{ width: "35%" }}
            />
            <Column
              field="industrial_name"
              header="ประเภทอุตสาหรรม"
              sortable
              style={{ width: "35%" }}
            />
            <Column
              header="จำนวนผลิตภัณฑ์"
              body={(data) => data.product_count}
            />
            <Column
              body={(rowData) => (
                <Button
                  icon="pi pi-eye"
                  rounded
                  severity="info"
                  onClick={() => {
                    setSelectedCompany(rowData);
                    setViewDialog(true);
                  }}
                />
              )}
            />
          </DataTable>
        </div>
      </div>

      {/* Dialog */}
      <Dialog
        header="Company Detail"
        visible={viewDialog}
        style={{ width: "50vw" }}
        footer={companyDialogFooter}
        onHide={() => setViewDialog(false)}
      >
        {selectedCompany ? (
          <div className="p-4 space-y-2 border rounded shadow">
            <p>
              <strong>ชื่อบริษัท:</strong> {selectedCompany.name ?? "-"}
            </p>
            <p>
              <strong>ประเภทอุตสาหกรรม:</strong>{" "}
              {selectedCompany.industrial_name ?? "-"}
            </p>
            <p>
              <strong>จำนวนผลิตภัณฑ์:</strong>{" "}
              {selectedCompany.product_count ?? "-"}
            </p>
            <p>
              <strong>ที่อยู่:</strong> {selectedCompany.address  ?? "-"}
            </p>
            <p>
              <strong>เบอร์โทร:</strong> {selectedCompany.contact_no?? "-"}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Dialog>
    </div>
  );
};

export default Dashboard;
