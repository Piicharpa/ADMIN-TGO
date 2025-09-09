import axios from 'axios';
import type { Demo } from "@/types";
type PCR = Demo.PCR;

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}admin/pcrs`;

export const PCRService = {
    // ดึง PCR ทั้งหมด
    getPCRs: async (): Promise<PCR[]> => {
        const response = await axios.get(URL);
        return response.data;
    },

    // ดึง PCR ตาม id
    getPCRById: async (id: number): Promise<PCR> => {
        const response = await axios.get(`${URL}/${id}`);
        return response.data;
    },

    // สร้าง PCR ใหม่
    createPCR: async (pcr: Omit<PCR, 'id'>): Promise<PCR> => {
        const response = await axios.post(URL, pcr);
        return response.data;
    },

    // แก้ไข PCR
    updatePCR: async (id: number, pcr: Omit<PCR, 'id'>): Promise<PCR> => {
        const response = await axios.put(`${URL}/${id}`, pcr);
        return response.data;
    },

    // ลบ PCR
    deletePCR: async (id: number): Promise<void> => {
        await axios.delete(`${URL}/${id}`);
    }
};
