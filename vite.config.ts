import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import manifest from './manifest.json';

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
