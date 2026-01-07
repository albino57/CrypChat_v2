// /src/vanilla/set_theme_legacy.js

// Versão compatível com 100% dos navegadores padrão antigo (ES5).
var darkTheme = document.getElementById('theme-dark');
var lightTheme = document.getElementById('theme-light');
var themeBtn = document.getElementById('theme-toggle');

//-----↓ Função que muda o tema ↓-----
themeBtn.onclick = function() {

    const isLightDisabled = lightTheme.disabled; // Verifica se o light está desativado

    if (isLightDisabled) { 
        console.log("Light Mode Ativado");
        
        lightTheme.disabled = false; //Ativa o light mode sobreescrevendo o dark mode, mas não o substituindo para gerar flashes na transição.
        themeBtn.innerHTML = '[0]';
        
        // localStorage.setItem('theme', 'light'); 
    } else {
        // --- MUDAR PARA DARK ---
        console.log("Dark Mode Ativado");
        
        lightTheme.disabled = true;  //desativa o light mode.
        themeBtn.innerHTML = '[1]';
        
        // localStorage.setItem('theme', 'dark');
    }
};
//-----↑ Função que muda o tema ↑-----