import react from '@vitejs/plugin-react';
import manifest from './manifest.json';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { crx } from '@crxjs/vite-plugin';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    watch: process.env.DEV === 'true' ? {} : null,
  },
  plugins: [react(), svgr(), crx({ manifest })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
});
