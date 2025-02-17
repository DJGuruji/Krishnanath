import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use a relative path
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src', // This allows you to use @ to reference the /src directory
    },
  },
});
