import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajusta o base path para o nome do teu repositório no GitHub Pages
  // base: '/o-teu-repositorio/', 
})