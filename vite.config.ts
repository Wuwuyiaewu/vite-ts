import { fileURLToPath, URL } from 'node:url'
import path from "path";
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const root = path.resolve(__dirname,'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main:path.resolve(__dirname,'index.html'),
        bloom:path.resolve(__dirname,'bloom/index.html'),
      }
    }
  },
})
