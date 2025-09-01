"use client";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import type { Demo } from "@/types";
import React from "react";

type PCR = Demo.PCR;

addLocale("th-TH", {
  firstDayOfWeek: 0,
  dayNames: [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
  ],
  dayNamesShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
  dayNamesMin: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
  monthNames: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ],
  monthNamesShort: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ],
  today: "วันนี้",
  clear: "ลบ",
});

interface Props {
  visible: boolean;
  pcr: PCR;
  submitted: boolean;
  onHide: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | { value: any },
    name: keyof PCR
  ) => void;
  onSave: () => void;
}

export default function AddEditDialog({
  visible,
  pcr,
  submitted,
  onHide,
  onChange,
  onSave,
}: Props) {
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
      header="รายละเอียด PCR"
      modal
      className="p-fluid"
      footer={footer}
      onHide={onHide}
    >
      <div className="field mt-3">
        <label htmlFor="pcr_name" className="font-bold">
          ชื่อ PCR *
        </label>
        <InputText
          id="pcr_name"
          value={pcr.pcr_name}
          onChange={(e) => onChange(e, "pcr_name")}
          required
          autoFocus
          className={classNames({
            "p-invalid": submitted && !pcr.pcr_name,
          })}
          placeholder="กรอกชื่อ PCR"
        />
        {submitted && !pcr.pcr_name && (
          <small className="p-error">จำเป็นต้องกรอกชื่อ PCR</small>
        )}
      </div>

      <div className="field mt-3">
        <label htmlFor="approval_date" className="font-bold">
          วันที่อนุมัติ
        </label>
        <Calendar
          value={pcr?.approval_date ? new Date(pcr.approval_date) : null} // ต้องเป็น Date object
          onChange={(e) => onChange({ value: e.value }, "approval_date")} // e.value คือ Date object
          locale="th-TH"
          showIcon
          dateFormat="dd/mm/yy"
        />
        {submitted && !pcr?.approval_date && (
          <small className="p-error">จำเป็นต้องเลือกวันเริ่มต้น</small>
        )}
      </div>

      <div className="field mt-3">
        <label htmlFor="pcr_type" className="font-bold">
          ประเภท PCR
        </label>
        <InputText
          id="pcr_type"
          value={pcr.pcr_type}
          onChange={(e) => onChange(e, "pcr_type")}
          placeholder="กรอกประเภท PCR"
        />
      </div>
    </Dialog>
  );
}
