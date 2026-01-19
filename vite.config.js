import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/React-Memory-Game/', // Removed for Vercel (Root deployment)
  plugins: [react()],
})
