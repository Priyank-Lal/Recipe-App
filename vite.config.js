import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// Increase memory limit
process.env.NODE_OPTIONS = "--max-old-space-size=4096";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          mui: ["@mui/material", "@mui/icons-material"],
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
