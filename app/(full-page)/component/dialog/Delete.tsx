"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface DeleteConfirmDialogProps {
  visible: boolean;
  onHide: () => void;
  onConfirm: () => void;
  message: string;
}

const DeleteDialog: React.FC<DeleteConfirmDialogProps> = ({
  visible,
  onHide,
  onConfirm,
  message,
}) => {
  const footer = (
    <div className="flex justify-end gap-2">
      <Button label="ไม่" icon="pi pi-times" outlined onClick={onHide} />
      <Button label="ใช่" icon="pi pi-check" severity="danger" onClick={onConfirm} />
    </div>
  );

  return (
    <Dialog
      visible={visible}
      style={{ width: "450px" }}
      header="ยืนยันการลบ"
      modal
      footer={footer}
      onHide={onHide}
    >
      <div className="flex align-items-center justify-content-center">
        <i
          className="pi pi-exclamation-triangle mr-3"
          style={{ fontSize: "2rem", color: "var(--red-500)" }}
        />
        <span>{message}</span>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
