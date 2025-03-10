import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// default vite config
export default defineConfig({
  plugins: [react()], // Enables React
  server: {
    proxy: {
      '/api': 'http://localhost:5001', // Proxy API requests to the server
    },
  },
});