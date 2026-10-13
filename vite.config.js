import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Carpetas locales de la raíz que no son parte de la app (no vigilarlas)
      ignored: ['Idea', 'Content MD', 'logos', 'Whatsapp', 'docs'].map(
        (dir) => path.resolve(import.meta.dirname, dir) + '/**',
      ),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})
