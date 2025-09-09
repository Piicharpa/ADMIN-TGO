

// next.config.js
const nextConfig = {
  output: 'export',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // ลบ console.log ในโหมด production
  },
  basePath: '/admin', // หรือชื่อโฟลเดอร์ที่คุณจะใช้
};

module.exports = nextConfig;