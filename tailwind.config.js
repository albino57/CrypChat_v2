/** /tailwind.config.js */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",         // Página de login Vanilla
    "./chat.html",          // Página de chat
    "./src/**/*.{js,ts,vue}", // Todos os arquivos de lógica e componentes
  ],
  theme: {
    extend: {
      // Aqui será adicionado cores específicas do modo Matrix/pixelArt
    },
  },
  plugins: [],
}