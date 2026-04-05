import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use GH Pages base only for production builds to avoid localhost redirects
  base: command === 'build' ? '/FE-Test/' : '/',
}))
