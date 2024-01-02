// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    build: {
      minify: mode === 'production' ? 'terser' : false,
    },
  });
};
