import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // Eğer 5173 doluysa başka porta geçme, hata ver.
    // Sistem varsayılan tarayıcısını doğrudan açar. VS Code'un terminal
    // bağlantılarını Simple Browser'a yönlendirmesini böylece atlarız.
    // Başka bir tarayıcı için: BROWSER=firefox npm run dev
    open: true,
  },
});
