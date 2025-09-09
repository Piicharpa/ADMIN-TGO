import type { Demo } from "@/types";
type Dashboard = Demo.Dashboard;
type CompanyDetail = Demo.CompanyDetail;
const NEXT_PUBLIC_URL_API = process.env.NEXT_PUBLIC_URL_API

<<<<<<< HEAD
const API_URL = `${NEXT_PUBLIC_URL_API}api/v1/admin/dashboard`;
=======
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}admin/dashboard`;
>>>>>>> my-changes-branch

export const DashboardService = {
    get: async (): Promise<Dashboard> => {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch dashboard data');
            }

            const data: Dashboard = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};
