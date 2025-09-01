"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

interface Verifier {
  auditor_id: number;
  name: string;
  register_id: string;
  prefix_name: string;
  description: string;
  expertise: string;
  organization: string;
  address: string;
  phone_number: string;
  zipcode: number;
}

interface VerifierDialogProps {
  visible: boolean;
  verifier: Verifier;
  submitted: boolean;
  onHide: () => void;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { value: any }, name: string) => void;
}

const AddEditDialog: React.FC<VerifierDialogProps> = ({
  visible,
  verifier,
  submitted,
  onHide,
  onSave,
  onChange,
}) => {
  const footer = (
    <>
      <Button label="ยกเลิก" icon="pi pi-times" text onClick={onHide} />
      <Button label="บันทึก" icon="pi pi-check" text onClick={onSave} />
    </>
  );

  return (
    <Dialog
      visible={visible}
      style={{ width: "450px" }}
      header="รายละเอียดผู้ทวนสอบ"
      modal
      className="p-fluid"
      footer={footer}
      onHide={onHide}
    >
      <div className="field">
        <label>ชื่อ *</label>
        <InputText
          value={verifier.name}
          onChange={(e) => onChange(e, "name")}
          className={classNames({ "p-invalid": submitted && !verifier.name })}
        />
      </div>
      <div className="field">
        <label>รหัสการลงทะเบียน *</label>
        <InputText
          value={verifier.register_id}
          onChange={(e) => onChange(e, "register_id")}
          className={classNames({ "p-invalid": submitted && !verifier.register_id })}
        />
      </div>
      <div className="field">
        <label>คำนำหน้าชื่อ</label>
        <InputText value={verifier.prefix_name} onChange={(e) => onChange(e, "prefix_name")} />
      </div>
      <div className="field">
        <label>อีเมล</label>
        <InputText value={verifier.description} onChange={(e) => onChange(e, "description")} />
      </div>
      <div className="field">
        <label>ความเชี่ยวชาญ</label>
        <InputText value={verifier.expertise} onChange={(e) => onChange(e, "expertise")} />
      </div>
      <div className="field">
        <label>องค์กร</label>
        <InputText value={verifier.organization} onChange={(e) => onChange(e, "organization")} />
      </div>
      <div className="field">
        <label>ที่อยู่</label>
        <InputTextarea rows={3} value={verifier.address} onChange={(e) => onChange(e, "address")} />
      </div>
      <div className="field">
        <label>เบอร์โทรศัพท์</label>
        <InputText value={verifier.phone_number} onChange={(e) => onChange(e, "phone_number")} />
      </div>
      <div className="field">
        <label>รหัสไปรษณีย์</label>
        <InputText
          value={verifier.zipcode?.toString()}
          onChange={(e) => onChange({ value: parseInt(e.target.value) || 0 }, "zipcode")}
        />
      </div>
    </Dialog>
  );
};

export default AddEditDialog;
