import { defineConfig } from 'vite';
import { CodeInspectorPlugin } from 'code-inspector-plugin';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { resolve } from 'path';

// https://cn.vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    CodeInspectorPlugin({
      bundler: 'vite',
    }),
    sitemap({
      hostname: 'https://oonne.com',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 10001,
  },
  build: {
    assetsInlineLimit: 0,
  },
});
