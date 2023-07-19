import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(), 
    WindiCSS(),
    AutoImport({ 
        include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      'vue'
    ]
  })
],
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}
})
