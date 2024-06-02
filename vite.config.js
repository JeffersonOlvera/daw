import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        miembros: resolve(__dirname, 'miembros.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        reportes: resolve(__dirname, 'reportes.html'),
        suscripciones: resolve(__dirname, 'suscripciones.html'),
      },
    },
    outDir: 'dist',
  },
});
