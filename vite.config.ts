import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Base path for GitHub Pages - use the name of your repository
  // If your repo is at https://github.com/username/repo-name
  // Then set base to '/repo-name/'
  // If deploying to a custom domain, you can remove this line
  base: '/GrantWise/',
});
