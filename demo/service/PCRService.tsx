import axios from 'axios';
import type { Demo } from "@/types";
type PCR = Demo.PCR;
const NEXT_PUBLIC_URL_API = process.env.NEXT_PUBLIC_URL_API

<<<<<<< HEAD
const API_URL = `${NEXT_PUBLIC_URL_API}api/v1/admin/pcrs`; // เปลี่ยนเป็น URL จริงของคุณ
=======
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}admin/pcrs`;
>>>>>>> my-changes-branch

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
