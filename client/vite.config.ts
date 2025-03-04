import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// default vite config
export default defineConfig({
  plugins: [react()], // Enables React
});