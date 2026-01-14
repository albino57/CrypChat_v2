// ./public/vanilla_scripts/set_theme_legacy.js

// Versão compatível com 100% dos navegadores padrão antigo (ES5).
var lightTheme = document.getElementById('theme-light');
var themeBtn = document.getElementById('theme-toggle');

themeBtn.innerText = "[ 1 ]"; // Define o texto inicial do botão para indicar o estado (Legacy mode).

themeBtn.onclick = function() { // Dispara a lógica de troca de tema.
    var isLightDisabled = lightTheme.disabled; // Captura o estado atual do tema claro.

    if (isLightDisabled) { 
        console.log("Light Mode Ativado (legacy)");
        lightTheme.disabled = false; // Ativa o light mode sobreescrevendo o dark mode, mas não o substituindo para gerar flashes na transição.
        themeBtn.innerHTML = '[ 0 ]';
        localStorage.setItem('theme', 'light'); // Salva a preferência do usuário no banco de dados do navegador.
    } else {
        console.log("Dark Mode Ativado (legacy)");
        lightTheme.disabled = true;  // Desativa o light mode.
        themeBtn.innerHTML = '[ 1 ]';
        localStorage.setItem('theme', 'dark');
    }
};