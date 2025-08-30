import type { Demo } from '@/types';
type Ef = Demo.Ef;
type EfCategories = Demo.EfCategories;
type EfSubcategories = Demo.EfSubcategories;

const API_URL = "http://178.128.123.212:5000/api/v1/admin";

function mapEf(data: any): Ef {
  return {
    ef_id: data.ef_id,
    item: data.item,
    item_detail: data.item_detail,
    unit: data.unit,
    ef: data.ef,
    ef_source_ref: data.ef_source_ref,
    tgo_updated: data.tgo_updated,
    tgo_ef_subcat_id: data.tgo_ef_subcat_id,
    created_date: data.created_date,
    updated_date: data.updated_date,
    tgo_ef_cat_name: data.tgo_ef_cat_name,
    tgo_ef_subcat_name: data.tgo_ef_subcat_name,
    tgo_ef_cat_id: data.tgo_ef_cat_id,
  };
}

function mapEfCategory(data: any): EfCategories {
  return {
    tgo_ef_cat_id: data.tgo_ef_cat_id,
    tgo_ef_cat_name: data.tgo_ef_cat_name,
    created_date: data.created_date,
    updated_date: data.updated_date,
  };
}

function mapEfSubcategory(data: any): EfSubcategories {
  return {
    tgo_ef_subcat_id: data.tgo_ef_subcat_id,
    tgo_ef_subcat_name: data.tgo_ef_subcat_name,
    tgo_ef_cat_id: data.tgo_ef_cat_id,
    created_date: data.created_date,
    updated_date: data.updated_date,
  };
}

export const EfService = {
  // ====== EF ======
  getEfs() {
    return fetch(`${API_URL}/tgoef`, { headers: { "Cache-Control": "no-cache" } })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then((data: any[]) => data.map(mapEf));
  },

  getEfById(id: number) {
    return fetch(`${API_URL}/tgoef/${id}`, { headers: { "Cache-Control": "no-cache" } })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(mapEf);
  },

  createEf(ef: Ef) {
    return fetch(`${API_URL}/tgoef`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ef),
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(mapEf);
  },

  updateEf(ef: Ef) {
    return fetch(`${API_URL}/tgoef/${ef.ef_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ef),
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(mapEf);
  },

  deleteEf(id: number) {
    return fetch(`${API_URL}/tgoef/${id}`, { method: "DELETE" })
      .then(res => res.ok ? res.json() : Promise.reject(res));
  },

  // ====== CATEGORIES ======
  getCategories() {
    return fetch(`${API_URL}/tgoefcategories`, { headers: { "Cache-Control": "no-cache" } })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then((data: any[]) => data.map(mapEfCategory));
  },

  // ====== SUBCATEGORIES ======
  getSubcategories() {
    return fetch(`${API_URL}/tgoefsubcategories`, { headers: { "Cache-Control": "no-cache" } })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then((data: any[]) => data.map(mapEfSubcategory));
  },
};
