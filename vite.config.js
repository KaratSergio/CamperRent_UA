import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env': JSON.stringify(import.meta.env),
    }),
  ],
  resolve: {
    alias: {
      '@src': '/src',
      '@api': '/src/api',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@components': '/src/components',
    },
  },
});
