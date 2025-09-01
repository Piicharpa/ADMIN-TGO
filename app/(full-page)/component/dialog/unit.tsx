"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import type { Demo } from "@/types";

type Unit = Demo.Unit;

interface UnitDialogProps {
  visible: boolean;
  unit: Unit | null;
  submitted: boolean;
  onHide: () => void;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const AddEditDialog: React.FC<UnitDialogProps> = ({
  visible,
  unit,
  submitted,
  onHide,
  onSave,
  onChange,
}) => {
  const footer = (
    <div className="flex justify-end gap-2">
      <Button label="ยกเลิก" icon="pi pi-times" outlined onClick={onHide} />
      <Button label="บันทึก" icon="pi pi-check" onClick={onSave} />
    </div>
  );

  return (
    <Dialog
      visible={visible}
      style={{ width: "500px" }}
      header="รายละเอียดหน่วย"
      modal
      className="p-fluid"
      footer={footer}
      onHide={onHide}
    >
      <div className="field mt-3">
        <label className="font-bold">ชื่อหน่วย (TH) *</label>
        <InputText
          value={unit?.product_unit_name_th || ""}
          onChange={(e) => onChange(e, "product_unit_name_th")}
          className={classNames({
            "p-invalid": submitted && !unit?.product_unit_name_th,
          })}
        />
      </div>
      <div className="field mt-3">
        <label className="font-bold">ชื่อหน่วย (EN) *</label>
        <InputText
          value={unit?.product_unit_name_en || ""}
          onChange={(e) => onChange(e, "product_unit_name_en")}
          className={classNames({
            "p-invalid": submitted && !unit?.product_unit_name_en,
          })}
        />
      </div>
      <div className="field mt-3">
        <label className="font-bold">รหัสย่อ (TH)</label>
        <InputText
          value={unit?.product_unit_abbr_th || ""}
          onChange={(e) => onChange(e, "product_unit_abbr_th")}
        />
      </div>
      <div className="field mt-3">
        <label className="font-bold">รหัสย่อ (EN)</label>
        <InputText
          value={unit?.product_unit_abbr_eng || ""}
          onChange={(e) => onChange(e, "product_unit_abbr_eng")}
        />
      </div>
    </Dialog>
  );
};

export default AddEditDialog;
