import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages. Replace YOUR_REPO with the repository name if deploying to repo pages.
  // For user/organization pages (username.github.io), set base: '/' instead.
  base: '/YOUR_REPO/',
})
