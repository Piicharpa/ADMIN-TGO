import type { Demo } from "@/types";
type Company = Demo.Company;

const adminToken = "your_admin_token_key"; // ควรใช้ key ที่ใช้เก็บ token ใน localStorage
const token = localStorage.getItem(adminToken);

const API_URL = "http://178.128.123.212:5000/api/v1/admin/companies";
const PUT_PASS = "http://178.128.123.212:5000/api/v1/users";

function mapCompany(apiData: any): Company {
  return {
    id: apiData.company_id,
    name: apiData.company_name,
    address: apiData.address,
    provinceId: apiData.province_id,
    products:
      apiData.products?.map((p: any) => ({
        id: p.product_id,
        name: p.product_name_th || p.product_name_en,
        status: p.verify_status || "N/A",
      })) || [],
  };
}

export const CompanyService = {
  getCompanies() {
    return fetch(API_URL, { headers: { "Cache-Control": "no-cache" } })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => data.map(mapCompany) as Company[]);
  },

  getCompanyById(id: number) {
    return fetch(`${API_URL}/${id}`, {
      headers: { "Cache-Control": "no-cache" },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(mapCompany);
  },

  putCompanyPass(companyId: number, newPassword: string) {
    console.log("get in this.putCompanyPass");
    if (!token) {
      console.error("Authentication token is missing. Please log in.");
      return Promise.reject("Authentication token is missing.");
    }
    return fetch(`${PUT_PASS}/${companyId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ password: newPassword }),
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    });
  },
};
