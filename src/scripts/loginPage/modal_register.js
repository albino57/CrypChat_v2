// /src/scripts/loginPage/modal_register.js

import { isInputNameSafe, isInputEmailSafe, isInputPasswordSafe } from '../regex.js';


const modal = document.getElementById('modal-register');
const btnOpen = document.querySelector('.btn-register');
const btnCancel = document.querySelector('.btn-cancel');
const btnRequest = document.querySelector('.btn-request');
const inputName = document.getElementById('reg-name');
const inputEmail = document.getElementById('reg-email');
const inputPassword = document.getElementById('reg-password');


//-----↓ Manipulação do Modal Abre/Fecha ↓-----
btnOpen.onclick = () => {
    modal.showModal();
}

btnCancel.onclick = () => {
    modal.close();
}

modal.addEventListener('click', (event) => { // Fecha o modal ao tocar/clicar fora.
    if (event.target === modal) {
        modal.close();
    }
});
//-----↑ Manipulação do Modal Abre/Fecha ↑-----

//-----↓ Função Trava/Destrava botão Solicitar_ ↓-----
function verificarCampos() {
    
    // Pega os valores
    const nome = inputName.value;
    const email = inputEmail.value;
    const senha = inputPassword.value;

    // Valida se não está vazio
    const naoVazio = nome.trim() !== "" && email.trim() !== "" && senha.trim() !== "";

    // Pega os valores da função REGEX
    const nomeSeguro = isInputNameSafe(nome);
    const emailSeguro = isInputEmailSafe(email);
    const senhaSegura = isInputPasswordSafe(senha);

    // Se tudo for true, ativa o botão
    if (naoVazio && nomeSeguro && emailSeguro && senhaSegura) {
        btnRequest.disabled = false;
        btnRequest.style.cursor = 'pointer';
        btnRequest.style.opacity = '1';
        btnRequest.title = "Pronto para enviar";
    } else {
        btnRequest.disabled = true;
        btnRequest.style.cursor = 'not-allowed';
        btnRequest.style.opacity = '0.3';
        
        // Informa o usuário o problema que está mantendo o botão desativado.
        if(!nomeSeguro && nome !== "") btnRequest.title = "Nome inválido";
        else if(!emailSeguro && email !== "") btnRequest.title = "Email inválido";
        else if(!senhaSegura && senha !== "") btnRequest.title = "Senha inválida";
        else btnRequest.title = "Preencha os campos";
    }
}

// Verifica a digitação
if (inputName && inputEmail && inputPassword) {
    inputName.addEventListener('input', verificarCampos);
    inputEmail.addEventListener('input', verificarCampos);
    inputPassword.addEventListener('input', verificarCampos);
}
//-----↑ Função Trava/Destrava botão Solicitar_ ↑-----