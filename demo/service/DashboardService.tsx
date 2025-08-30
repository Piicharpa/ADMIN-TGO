import type { Demo } from "@/types";
type Dashboard = Demo.Dashboard;
type CompanyDetail = Demo.CompanyDetail;

const API_URL = 'http://178.128.123.212:5000/api/v1/admin/dashboard';

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
