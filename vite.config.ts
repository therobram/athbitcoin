import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Opciones de optimización de la construcción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Fragmentación separada para mejor caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('phosphor-react') || id.includes('react-countdown')) {
              return 'ui';
            }
          }
        },
      },
    },
    // Habilitar la compresión gzip
    reportCompressedSize: true,
    // Mejora la velocidad de construcción
    sourcemap: false,
  },
  server: {
    host: true,
    port: 5173,
  },
})

