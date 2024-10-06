import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the configuration
export default defineConfig({
  plugins: [react()],  // Plugin for React
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});