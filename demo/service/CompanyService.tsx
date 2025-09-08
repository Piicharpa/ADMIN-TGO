import type { Demo } from "@/types";
type Company = Demo.Company;

const NEXT_PUBLIC_URL_API = process.env.NEXT_PUBLIC_URL_API;

const API_URL = `${NEXT_PUBLIC_URL_API}api/v1/admin/companies`;
const USERS_API_URL = `${NEXT_PUBLIC_URL_API}api/v1/users`;
const PUT_PASS = `${NEXT_PUBLIC_URL_API}api/v1/users`;

function mapCompany(apiData: any): Company {
  return {
    id: apiData.company_id,
    user_id: apiData.user_id,
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
  async getCompanies() {
    // Corrected: Get the token inside the function right before it's used
    const token = localStorage.getItem('token');

    if (!token) {
        console.error("Authentication token is missing. Please log in.");
        throw new Error("Authentication token is missing.");
    }

    try {
      const companiesRes = await fetch(API_URL, { 
        headers: { 
          "Cache-Control": "no-cache",
          // Add the Authorization header for this request as well
          'Authorization': `Bearer ${token}` 
        } 
      });
      if (!companiesRes.ok) throw new Error(`HTTP error! status: ${companiesRes.status}`);
      const companiesData = await companiesRes.json();
      console.log("complete fetch company")
      console.log(companiesData)


      const usersRes = await fetch(USERS_API_URL, {
        headers: {
          "Cache-Control": "no-cache",
          'Authorization': `Bearer ${token}` 
        }
      });
      if (!usersRes.ok) throw new Error(`HTTP error! status: ${usersRes.status}`);
      const usersData = await usersRes.json();
      console.log("complete fetch user")

      const usersMap = new Map();
      usersData.forEach((user: any) => {
        usersMap.set(user.name, user.user_id);
      });

      const mappedCompanies = companiesData.map((company: any) => {
        const userId = usersMap.get(company.company_name);
        return {
          id: company.company_id,
          user_id: userId,
          name: company.company_name,
          address: company.address,
          provinceId: company.province_id,
          products: company.products?.map((p: any) => ({
            id: p.product_id,
            name: p.product_name_th || p.product_name_en,
            status: p.verify_status || "N/A",
          })) || [],
        };
      });

      return mappedCompanies as Company[];
    } catch (error) {
      console.error("Failed to fetch companies and users:", error);
      throw error;
    }
  },

  getCompanyById(id: number) {
    // Corrected: Get the token here as well
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("Authentication token is missing. Please log in.");
        return Promise.reject("Authentication token is missing.");
    }
    
    return fetch(`${API_URL}/${id}`, {
      headers: { 
        "Cache-Control": "no-cache",
        // Add the Authorization header
        'Authorization': `Bearer ${token}`
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(mapCompany);
  },

  putCompanyPass(companyId: number, newPassword: string) {
    console.log(companyId)
    console.log("get in this.putCompanyPass");
    // Corrected: Get the token here as well
    const token = localStorage.getItem("token");
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