"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import type { Demo } from "@/types";

type Round = Demo.Round;

interface Props {
  visible: boolean;
  round: Round;
  submitted: boolean;
  onHide: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | { value: any }, name: string) => void;
  onSave: () => void;
}

export default function AddEditDialog({
  visible,
  round,
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
      header="รายละเอียดรอบลงทะเบียน"
      modal
      className="p-fluid"
      footer={footer}
      onHide={onHide}
    >
      {/* รอบ */}
      <div className="field mt-3">
        <label htmlFor="quarter" className="font-bold">
          รอบ *
        </label>
        <InputText
          id="quarter"
          value={round?.quarter || ""}
          onChange={(e) => onChange(e, "quarter")}
          required
          autoFocus
          className={classNames({ "p-invalid": submitted && !round?.quarter })}
          placeholder="กรอกรอบ"
        />
        {submitted && !round?.quarter && (
          <small className="p-error">จำเป็นต้องกรอกรอบลงทะเบียน</small>
        )}
      </div>

      {/* วันเริ่มต้น */}
      <div className="field mt-3">
        <label htmlFor="start" className="font-bold">
          วันเริ่มต้น *
        </label>
        <Calendar
          id="start"
          value={round?.start ? new Date(round.start) : null}
          onChange={(e) => {
            const date = e.value instanceof Date ? e.value : null;
            onChange({ value: date ? date.toISOString().split("T")[0] : "" }, "start");
          }}
          showIcon
          dateFormat="yy-mm-dd"
          className={classNames({ "p-invalid": submitted && !round?.start })}
          placeholder="เลือกวันเริ่มต้น"
        />
        {submitted && !round?.start && (
          <small className="p-error">จำเป็นต้องเลือกวันเริ่มต้น</small>
        )}
      </div>

      {/* วันสิ้นสุด */}
      <div className="field mt-3">
        <label htmlFor="end" className="font-bold">
          วันสิ้นสุด *
        </label>
        <Calendar
          id="end"
          value={round?.end ? new Date(round.end) : null}
          onChange={(e) => {
            const date = e.value instanceof Date ? e.value : null;
            onChange({ value: date ? date.toISOString().split("T")[0] : "" }, "end");
          }}
          showIcon
          dateFormat="yy-mm-dd"
          className={classNames({ "p-invalid": submitted && !round?.end })}
          placeholder="เลือกวันสิ้นสุด"
        />
        {submitted && !round?.end && (
          <small className="p-error">จำเป็นต้องเลือกวันสิ้นสุด</small>
        )}
      </div>

      {/* สถานะ */}
      <div className="field mt-3">
        <label htmlFor="status" className="font-bold">
          สถานะ *
        </label>
        <Dropdown
          id="status"
          value={round?.status ?? ""}
          options={[
            { label: "ใช้งาน", value: 1 },
            { label: "ไม่ใช้งาน", value: 0 },
          ]}
          onChange={(e) => onChange(e, "status")}
          optionLabel="label"
          optionValue="value"
          placeholder="เลือกสถานะ"
          className={classNames({ "p-invalid": submitted && round?.status === undefined })}
        />
        {submitted && round?.status === undefined && (
          <small className="p-error">จำเป็นต้องเลือกสถานะ</small>
        )}
      </div>
    </Dialog>
  );
}
