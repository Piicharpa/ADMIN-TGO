import type { Demo } from "@/types";
type Unit = Demo.Unit;
const NEXT_PUBLIC_URL_API = process.env.NEXT_PUBLIC_URL_API

<<<<<<< HEAD
const API_URL = `${NEXT_PUBLIC_URL_API}api/v1/admin/units`;
=======

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}admin/units`;
>>>>>>> my-changes-branch

function mapUnit(apiData: any): Unit {
  return {
    product_unit_id: apiData.product_unit_id,
    product_unit_name_th: apiData.product_unit_name_th,
    product_unit_name_en: apiData.product_unit_name_en,
    product_unit_abbr_th: apiData.product_unit_abbr_th,
    product_unit_abbr_eng: apiData.product_unit_abbr_eng,
  };
}

export const UnitService = {
  getUnits() {
    return fetch(URL, { headers: { "Cache-Control": "no-cache" } })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => data.map(mapUnit));
  },

  getUnitById(id: number) {
    return fetch(`${URL}/${id}`, { headers: { "Cache-Control": "no-cache" } })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(mapUnit);
  },

  createUnit(unit: Unit) {
    return fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(unit),
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(mapUnit);
  },

  updateUnit(unit: Unit) {
    return fetch(`${URL}/${unit.product_unit_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(unit),
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(mapUnit);
  },

  deleteUnit(id: number) {
    return fetch(`${URL}/${id}`, { method: 'DELETE' })
      .then(res => res.ok ? res.json() : Promise.reject(res));
  },
};
