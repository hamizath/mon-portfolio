import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/mon-portfolio/site-gommage/",
  root: "client",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,  
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
});


