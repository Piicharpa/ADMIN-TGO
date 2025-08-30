import axios from 'axios';
import type { Demo } from "@/types";
type PCR = Demo.PCR;

const API_URL = 'http://178.128.123.212:5000/api/v1/admin/pcrs'; // เปลี่ยนเป็น URL จริงของคุณ

export const PCRService = {
    // ดึง PCR ทั้งหมด
    getPCRs: async (): Promise<PCR[]> => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    // ดึง PCR ตาม id
    getPCRById: async (id: number): Promise<PCR> => {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },

    // สร้าง PCR ใหม่
    createPCR: async (pcr: Omit<PCR, 'id'>): Promise<PCR> => {
        const response = await axios.post(API_URL, pcr);
        return response.data;
    },

    // แก้ไข PCR
    updatePCR: async (id: number, pcr: Omit<PCR, 'id'>): Promise<PCR> => {
        const response = await axios.put(`${API_URL}/${id}`, pcr);
        return response.data;
    },

    // ลบ PCR
    deletePCR: async (id: number): Promise<void> => {
        await axios.delete(`${API_URL}/${id}`);
    }
};
