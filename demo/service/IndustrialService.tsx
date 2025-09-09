import type { Demo } from "@/types";
type Industrial = Demo.Industrial;


const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}admin/industrials`;

function mapIndustrial(apiData: any): Industrial {
  return {
     industrial_id: apiData.industrial_id,
    industrial_name: apiData.industrial_name,
    required_cbam: apiData.required_cbam
  };
}

export const IndustrialService = {
  getIndustrials() {
    return fetch(URL, { headers: { "Cache-Control": "no-cache" } })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => data.map(mapIndustrial));
  },

  getIndustrialById(id: number) {
    return fetch(`${URL}/${id}`, { headers: { "Cache-Control": "no-cache" } })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(mapIndustrial);
  },

  createIndustrial(industrial: Industrial) {
    return fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(industrial),
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(mapIndustrial);
  },

  updateUnit(industrial: Industrial) {
    return fetch(`${URL}/${industrial.industrial_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(industrial),
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(mapIndustrial);
  },

  deleteUnit(id: number) {
    return fetch(`${URL}/${id}`, { method: 'DELETE' })
      .then(res => res.ok ? res.json() : Promise.reject(res));
  },
};
