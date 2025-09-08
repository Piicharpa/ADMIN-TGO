import type { Demo } from "@/types";
type Dashboard = Demo.Dashboard;
type CompanyDetail = Demo.CompanyDetail;
const NEXT_PUBLIC_URL_API = process.env.NEXT_PUBLIC_URL_API

const API_URL = `${NEXT_PUBLIC_URL_API}api/v1/admin/dashboard`;

export const DashboardService = {
    get: async (): Promise<Dashboard> => {
        try {
            const response = await fetch(API_URL, {
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
