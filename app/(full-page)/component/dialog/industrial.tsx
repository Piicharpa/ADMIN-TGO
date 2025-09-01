"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

interface IndustrialFormDialogProps {
  visible: boolean;
  onHide: () => void;
  onSave: () => void;
  industrial: any;
  setIndustrial: (val: any) => void;
  submitted: boolean;
  cbamOptions: { label: string; value: number }[];
}

const AddEditDialog: React.FC<IndustrialFormDialogProps> = ({
  visible,
  onHide,
  onSave,
  industrial,
  setIndustrial,
  submitted,
  cbamOptions,
}) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const val = e.target.value;
    setIndustrial((prev: any) => (prev ? { ...prev, [name]: val } : null));
  };
  const onDropdownChange = (e: { value: any }, name: string) => {
    const val = e.value;
    setIndustrial((prev: any) => (prev ? { ...prev, [name]: val } : null));
  };
  const footer = (
    <div className="flex justify-end gap-2">
      <Button label="ยกเลิก" icon="pi pi-times" outlined onClick={onHide} />
      <Button label="บันทึก" icon="pi pi-check" onClick={onSave} />
    </div>
  );
  return (
    <Dialog
      visible={visible}
      style={{ width: "450px" }}
      header="รายละเอียดอุตสาหกรรม"
      modal
      className="p-fluid"
      footer={footer}
      onHide={onHide}
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
  );
};

export default AddEditDialog;
