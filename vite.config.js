import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 使用特定的 IP 地址
    port: '8092', // 指定启动端口
    open: true, // 启动后是否自动打开浏览器
  }
})
