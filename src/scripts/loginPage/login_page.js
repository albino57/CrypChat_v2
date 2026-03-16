// /src/scripts/loginPage/login_page.js

import { isInputEmailSafe, isInputPasswordSafe } from '../regex.js';

const btnTheme = document.getElementById('theme-toggle');
const btnRegister = document.querySelector('.btn-register');
const btnConnect = document.querySelector('.btn-connect');
const btnInfo = document.getElementById('version-display');
const inputEmail = document.getElementById('login-user');
const inputPassword = document.getElementById('login-pass');
const serverMode = document.getElementById('FGC');
const interfaceMode = document.getElementById('FGIF');

console.log(serverMode);

const radioSelecionado = document.querySelector('input[name="caminho"]:checked');

if (radioSelecionado) {
    console.log("Selecionado: " + radioSelecionado.value);
} else {
    console.log("Nenhuma opção selecionada.");
}

//-----↓ Lógica para Ativar Botões ↓-----
document.addEventListener('DOMContentLoaded', () => { //Só executa depois que carregar a pagina toda.
    if (btnTheme) {
        btnTheme.disabled = false; // Ativa o botão se o usuário exceutar o JS no navegador
    }

    if (serverMode) {
        serverMode.disabled = false;
    }

    if (btnRegister) {
        btnRegister.disabled = false;
        btnRegister.style.cursor = 'pointer';
        btnRegister.style.opacity = '1';
    }

    if (btnInfo) {
        btnInfo.disabled = false;
        btnInfo.style.cursor = 'pointer';
        btnInfo.style.opacity = '1';
    }
});
//-----↑ Lógica para Ativar Botões ↑-----

//-----↓ Função Destrava os elementos em efeito dominó ↓-----
function unlockElements() {
    if (serverMode) {
        interfaceMode.disabled = false;
    }
}
//-----↑ Função Destrava os elementos em efeito dominó ↑-----

//-----↓ Função Trava/Destrava botão Conectar_ ↓-----
function verificarCampos() {

    // Pega os valores
    const email = inputEmail.value;
    const senha = inputPassword.value;

    // Valida se não está vazio
    const naoVazio = email.trim() !== "" && senha.trim() !== "";

    // Pega os valores da função REGEX
    const emailSeguro = isInputEmailSafe(email);
    const senhaSegura = isInputPasswordSafe(senha);

    // Se tudo for true, ativa os botões
    if (naoVazio && emailSeguro && senhaSegura) {
        btnConnect.disabled = false;
        btnConnect.style.cursor = 'pointer';
        btnConnect.style.opacity = '1';
        btnConnect.title = "Pronto para Conectar";
    } else {
        btnConnect.disabled = true;
        btnConnect.style.cursor = 'not-allowed';
        btnConnect.style.opacity = '0.3';

        // Informa o usuário o problema que está mantendo o botão desativado.
        if (!emailSeguro && email !== "") btnConnect.title = "Usuário inválido";
        else if (!senhaSegura && senha !== "") btnConnect.title = "Senha inválida";
        else btnConnect.title = "Preencha os campos";
    }
}

if (inputEmail && inputPassword) { // Verifica a digitação
    inputEmail.addEventListener('input', verificarCampos);
    inputPassword.addEventListener('input', verificarCampos);
}
//-----↑ Função Trava/Destrava botão Conectar_ ↑-----

//-----↓ Função de transição de página ↓-----
if (btnConnect) {
    btnConnect.onclick = (e) => { // 'e' é abreviação de event e ele contém todos os detalhes técnicos do clique específico.
        e.preventDefault();       // 'preventDefault()' Previne o comportamento padrão, "Não faça o que você faria normalmente (recarregar a página). Deixa que o meu código JavaScript assume o comando daqui pra frente."

        window.location.href = "chat.html"; // Conecta na página de chat.
    };
}
//-----↑ Função de transição de página ↑-----