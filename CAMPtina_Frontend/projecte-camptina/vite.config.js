import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    history: {
      fallback: true // 👈 Habilita el modo SPA
    }
  }
})
