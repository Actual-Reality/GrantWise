import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Since you're using a custom domain (grantwise.app), 
  // the base path should be '/' instead of '/GrantWise/'
  base: '/',
});
