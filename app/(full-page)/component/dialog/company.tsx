"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";


interface AdminPasswordDialogProps {
  visible: boolean;
  onHide: () => void;
  onSave: (password: string) => void;
  passwordData: { password: string; confirmPassword: string };
  setPasswordData: React.Dispatch<
    React.SetStateAction<{ password: string; confirmPassword: string }>
  >;

  submitted: boolean;
  
}
const AddEditDialog: React.FC<AdminPasswordDialogProps> = ({
  visible,
  onHide,
  onSave,
  passwordData,
  setPasswordData,
  submitted,
}) => {
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const val = e.target.value;
    setPasswordData((prev: { password: string; confirmPassword: string }) => ({
      ...prev,
      [name]: val,
    }));
  };

  const footer = (
    <div className="flex justify-end gap-2">
      <Button label="ยกเลิก" icon="pi pi-times" outlined onClick={onHide} />
      <Button
        label="บันทึก"
        icon="pi pi-check"
        onClick={() => onSave(passwordData.password)}
        disabled={
          !passwordData.password ||
          !passwordData.confirmPassword ||
          passwordData.password !== passwordData.confirmPassword
        }
      />
    </div>
  );

  

  const passwordsMatch =
    passwordData.password && passwordData.confirmPassword
      ? passwordData.password === passwordData.confirmPassword
      : true;

  return (
    <Dialog
      visible={visible}
      style={{ width: "450px" }}
      header="เปลี่ยนรหัสผ่านผู้ดูแลระบบ"
      modal
      className="p-fluid"
      footer={footer}
      onHide={onHide}
    >
      <div className="field mt-3">
        <label htmlFor="password" className="font-bold">
          รหัสผ่านใหม่ *
        </label>
        <InputText
          id="password"
          type="password"
          value={passwordData.password}
          onChange={(e) => onInputChange(e, "password")}
          required
          autoFocus
          className={classNames({
            "p-invalid": submitted && !passwordData.password,
          })}
          placeholder="กรอกรหัสผ่านใหม่"
        />
        {submitted && !passwordData.password && (
          <small className="p-error">จำเป็นต้องกรอกรหัสผ่าน</small>
        )}
      </div>

      <div className="field mt-3">
        <label htmlFor="confirmPassword" className="font-bold">
          ยืนยันรหัสผ่าน *
        </label>
        <InputText
          id="confirmPassword"
          type="password"
          value={passwordData.confirmPassword}
          onChange={(e) => onInputChange(e, "confirmPassword")}
          required
          className={classNames({
            "p-invalid":
              submitted && (!passwordData.confirmPassword || !passwordsMatch),
          })}
          placeholder="กรอกรหัสผ่านอีกครั้ง"
        />
        {submitted && !passwordData.confirmPassword && (
          <small className="p-error">จำเป็นต้องยืนยันรหัสผ่าน</small>
        )}
        {submitted && passwordData.confirmPassword && !passwordsMatch && (
          <small className="p-error">รหัสผ่านไม่ตรงกัน</small>
        )}
      </div>
    </Dialog>
  );
};

export default AddEditDialog;
