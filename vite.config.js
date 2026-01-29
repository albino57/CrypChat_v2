import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  // Isso libera o acesso para a rede (Wi-Fi) para usar no navegador do celular e testar.
  server: {
    host: true
  },
  
  plugins: [vue()], // "Lê arquivos .vue"
  build: {
    rollupOptions: {
      input: {
        // Ponto de entrada 1: Login Vanilla
        main: resolve(__dirname, 'index.html'),
        // Ponto de entrada 2: Chat em Vue
        app: resolve(__dirname, 'app/index.html') 
      }
    }
  }
})