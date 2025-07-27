import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tsconfigPaths from "vite-tsconfig-paths";
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths(), dts()],
  resolve: {
    alias: {
      "@libs": resolve(__dirname, "./libs"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "libs/main.ts"),
      name: "elefin-ui",
      fileName: "main",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
