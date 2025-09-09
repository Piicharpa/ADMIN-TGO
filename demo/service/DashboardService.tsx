import type { Demo } from "@/types";
type Dashboard = Demo.Dashboard;
type CompanyDetail = Demo.CompanyDetail;

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}admin/dashboard`;

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
