import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/",
  server: {
    host: true,
    proxy: {
      "/posts": {
        target: "https://api-avance-plus.onrender.com",
        changeOrigin: true,
        secure: true,
      },
      "/status": {
        target: "https://api-avance-plus.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["axios"],
    },
  },
});
