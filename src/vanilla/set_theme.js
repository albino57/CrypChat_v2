// /src/vanilla/set_theme.js

const themeLink = document.getElementById('theme-link');
const themeBtn = document.getElementById('theme-toggle');

//-----↓ Função que muda o tema ↓-----
themeBtn.onclick = function() {
    if (themeLink.href.includes('styles-login_dark.css')) { // Verifica qual arquivo está carregado no momento
        console.log("Tema alterado para o light.")
        themeLink.href = './src/vanilla/styles/styles-login_light.css'; // Muda para o tema claro
        themeBtn.innerHTML = '[0]'; // Atualiza o visual do botão
    } else {
        console.log("Tema alterado para o dark.")
        themeLink.href = './src/vanilla/styles/styles-login_dark.css'; // Volta para o tema escuro
        themeBtn.innerHTML = '[1]';
    }
};
//-----↑ Função que muda o tema ↑-----