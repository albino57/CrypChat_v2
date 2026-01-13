import { defineConfig } from 'vite'

export default defineConfig({
  // Isso libera o acesso para a rede (Wi-Fi) para usar no navegador do celular e testar.
  server: {
    host: true
  }
})