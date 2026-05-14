import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [],  // Empty array
      output: {
        manualChunks: undefined
      }
    },
    commonjsOptions: {
      include: []
    }
  },
  optimizeDeps: {
    force: true  // Force dependency optimization
  },
  server: {
    port: 3000
  }
})
