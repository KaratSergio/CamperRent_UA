import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  base: '/CamperRent_UA/',
  plugins: [
    react(),
    replace({
      'process.env': JSON.stringify(import.meta.env),
      preventAssignment: true,
    }),
  ],
});
