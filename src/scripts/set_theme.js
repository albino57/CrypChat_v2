// ./src/scripts/set_theme.js

//Localiza os elementos na página
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('crypchat-theme');

//-----↓ Função que checa o último tema usado.
if(savedTheme === 'light'){
    body.classList.add('light-theme');
    themeBtn.textContent = '[0]';
}else{
    themeBtn.textContent = '[1]';
}

//-----↓ função que apenas muda o tema e salva a preferência
themeBtn.addEventListener('click', () => { 
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        themeBtn.textContent = '[0]';
        localStorage.setItem('crypchat-theme', 'light');
    } else {
        themeBtn.textContent = '[1]';
        localStorage.setItem('crypchat-theme', 'dark');
    }
});