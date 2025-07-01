import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/quanthashlab/' // <-- LÍNEA añadida para subir a github pages
})
