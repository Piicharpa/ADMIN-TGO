/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // เพิ่มบรรทัดนี้เพื่อกำหนด base path
  basePath: '/admin', // หรือชื่อโฟลเดอร์ที่คุณจะใช้
};

module.exports = nextConfig;