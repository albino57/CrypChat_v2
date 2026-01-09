// /src/vanilla/loginPage_script/set_theme.js

const lightTheme = document.getElementById('theme-light');
const themeBtn = document.getElementById('theme-toggle');

themeBtn.onclick = function() { // Dispara a lógica de troca de tema.
    const isLightDisabled = lightTheme.disabled; // Captura o estado atual do tema claro.

    if (isLightDisabled) { 
        console.log("Light Mode Ativado");
        lightTheme.disabled = false; //Ativa o light mode sobreescrevendo o dark mode, mas não o substituindo para gerar flashes na transição.
        themeBtn.innerHTML = '[0]';
        localStorage.setItem('theme', 'light'); // Salva a preferência do usuário no banco de dados do navegador.
    } else {
        console.log("Dark Mode Ativado");
        lightTheme.disabled = true;  // Desativa o light mode.
        themeBtn.innerHTML = '[1]';
        localStorage.setItem('theme', 'dark');
    }
};