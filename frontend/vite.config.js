import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.lottie"],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-heroicons": ["@heroicons/react/24/outline"],
          "vendor-lottie": ["@lottiefiles/dotlottie-react"],
          // Group utility functions
          utils: ["./src/utils/animationVariants.js"],
        },
      },
    },
    // Increase the warning limit to avoid unnecessary warnings
    chunkSizeWarningLimit: 600,
    // Optimize asset compression
    assetsInlineLimit: 4096,
  },
});
