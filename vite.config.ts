'use strict';

import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Customize Rollup options here
      input: 'src/main.js',
      output: {
        format: 'es',
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});