import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig({
//   server: {
//     proxy: {
//       "/chat": {
//         target: "http://localhost:5173", // 백엔드 주소
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });
