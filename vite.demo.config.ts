import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: path.join(__dirname, 'demo'),
  resolve: {
    alias: {
      'slate-bar': path.join(__dirname, 'src/index.ts'),
    },
  },
  server: {
    open: true,
    port: 5173,
  },
})
