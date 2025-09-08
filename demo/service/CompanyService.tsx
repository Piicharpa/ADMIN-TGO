import type { Demo } from "@/types";
type Company = Demo.Company;

const NEXT_PUBLIC_URL_API = process.env.NEXT_PUBLIC_URL_API;

const API_URL = `${NEXT_PUBLIC_URL_API}api/v1/admin/companies`;
const USERS_API_URL = `${NEXT_PUBLIC_URL_API}api/v1/admin/users`;


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
  getCompanies() {
    return fetch(API_URL, { headers: { "Cache-Control": "no-cache" } })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => data.map(mapCompany) as Company[]);
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
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(mapCompany);
  },

  async updatePasswordByCompanyName(companyName: string, newPassword: string) {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Authentication token is missing.");
      throw new Error("Authentication token is missing.");
    }

    try {
      const usersRes = await fetch(USERS_API_URL, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
          authorization: `Bearer ${token}`,
        },
      });
      if (!usersRes.ok)
        throw new Error(`HTTP error! status: ${usersRes.status}`);
      const usersData = await usersRes.json();

      const user = usersData.find((u: any) => u.name === companyName);
      if (!user) {
        throw new Error(`User not found for company: ${companyName}`);
      }
      
      // Call the existing putCompanyPass function with the found user ID
      return this.putCompanyPass(user.user_id, newPassword);

    } catch (error) {
      console.error("Failed to fetch user ID:", error);
      throw error;
    }
  },


  putCompanyPass(userId: number, newPassword: string) {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Authentication token is missing. Please log in.");
      return Promise.reject("Authentication token is missing.");
    }
    return fetch(`${USERS_API_URL}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
