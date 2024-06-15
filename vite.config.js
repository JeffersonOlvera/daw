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
        conformidad: resolve(__dirname, 'conformidad.html'),
        registro: resolve(__dirname, 'registro.html'),
        soporte: resolve(__dirname, 'soporte.html'),
        resgistro_miembros: resolve(__dirname, 'registro_miembros.html'),
        renovacion_membresias: resolve(__dirname, 'renovacion_membresias.html'),
      },
    },
    outDir: 'dist',
  },
});
