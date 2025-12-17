import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ✅ allows access from LAN & ngrok
    port: 5174, // your local dev server port
    strictPort: true, // fail if port 5174 is taken

    // ✅ Allow your ngrok URLs
    allowedHosts: [
      'indeclinably-unpredestined-ernestine.ngrok-free.dev',
      '.ngrok-free.dev' // optional: wildcard for any ngrok URL
    ]
  }
})
