"use client";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";
import React from "react";
import type { Demo } from "@/types";

type Ef = Demo.Ef;
type Category = Demo.TgoEfCategory;
type Subcategory = Demo.TgoEfSubcategory;



interface Props {
  visible: boolean;
  ef: Ef;
  submitted: boolean;
  onHide: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: keyof Ef) => void;
  onSave: () => void;
  tgoCategories: Category[];
  tgoSubcategories: Subcategory[];
  onCategoryChange: (e: any) => void;
  onSubcategoryChange: (e: any) => void;
}

export default function AddEditDialog({
  visible,
  ef,
  submitted,
  onHide,
  onChange,
  onSave,
  tgoCategories,
  tgoSubcategories,
  onCategoryChange,
  onSubcategoryChange
}: Props) {
  const footer = (
    <div className="flex justify-end gap-2">
      <Button label="ยกเลิก" icon="pi pi-times" outlined onClick={onHide} />
      <Button label="บันทึก" icon="pi pi-check" onClick={onSave} />
    </div>
  );

  // Filter subcategories based on the selected category
  const filteredSubcategories = ef.tgo_ef_cat_id
    ? tgoSubcategories?.filter(sub => sub.tgo_ef_cat_id === ef.tgo_ef_cat_id)
    : [];

  return (
    <Dialog
      visible={visible}
      style={{ width: "500px" }}
      header="รายละเอียด EF"
      modal
      className="p-fluid"
      footer={footer}
      onHide={onHide}
    >
      <div className="field mt-3">
        <label htmlFor="item" className="font-bold">
          รายการ *
        </label>
        <InputText
          id="item"
          value={ef.item}
          onChange={(e) => onChange(e, "item")}
          required
          autoFocus
          className={classNames({ "p-invalid": submitted && !ef.item })}
          placeholder="กรอกรายการ"
        />
        {submitted && !ef.item && (
          <small className="p-error">จำเป็นต้องกรอกรายการ</small>
        )}
      </div>

      <div className="field mt-3">
        <label htmlFor="item_detail" className="font-bold">
          รายละเอียด
        </label>
        <InputTextarea
          id="item_detail"
          value={ef.item_detail}
          onChange={(e) => onChange(e, "item_detail")}
          rows={3}
          placeholder="กรอกรายละเอียด"
        />
      </div>

      <div className="field mt-3">
        <label htmlFor="unit" className="font-bold">
          หน่วย
        </label>
        <InputText
          id="unit"
          value={ef.unit}
          onChange={(e) => onChange(e, "unit")}
          placeholder="กรอกหน่วย"
        />
      </div>

      <div className="field mt-3">
        <label htmlFor="ef" className="font-bold">
          ค่า EF
        </label>
        <InputText
          id="ef"
          value={ef.ef}
          onChange={(e) => onChange(e, "ef")}
          placeholder="กรอกค่า EF"
        />
      </div>

      <div className="field mt-3">
        <label htmlFor="ef_source_ref" className="font-bold">
          ที่มา
        </label>
        <InputText
          id="ef_source_ref"
          value={ef.ef_source_ref}
          onChange={(e) => onChange(e, "ef_source_ref")}
          placeholder="กรอกที่มา"
        />
      </div>

      <div className="field mt-3">
        <label htmlFor="tgo_updated" className="font-bold">
          TGO Updated
        </label>
        <InputText
          id="tgo_updated"
          value={ef.tgo_updated || ""}
          onChange={(e) => onChange(e, "tgo_updated")}
          placeholder="กรอกข้อมูล TGO Updated"
        />
      </div>

      <div className="field mt-3">
        <label htmlFor="tgo_ef_cat_name" className="font-bold">
          หมวดหมู่หลัก
        </label>
        <Dropdown
          id="tgo_ef_cat_name"
          value={ef.tgo_ef_cat_id}
          options={tgoCategories}
          onChange={onCategoryChange}
          optionLabel="tgo_ef_cat_name"
          optionValue="tgo_ef_cat_id"
          placeholder="เลือกหมวดหมู่หลัก"
        />
      </div>
      
      <div className="field mt-3">
        <label htmlFor="tgo_ef_subcat_name" className="font-bold">
          หมวดหมู่ย่อย
        </label>
        <Dropdown
          id="tgo_ef_subcat_name"
          value={ef.tgo_ef_subcat_id || null}
          options={filteredSubcategories}
          onChange={onSubcategoryChange}
          optionLabel="tgo_ef_subcat_name"
          optionValue="tgo_ef_subcat_id"
          placeholder="เลือกหมวดหมู่ย่อย"
          disabled={!ef.tgo_ef_cat_id}
        />
      </div>
    </Dialog>
  );
}
