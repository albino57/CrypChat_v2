// /src/scripts/loginPage/modal_register.js

const modal = document.getElementById('modal-register');
const btnOpen = document.querySelector('.btn-register');
const btnCancel = document.querySelector('.btn-cancel');

// Abre o modal
btnOpen.onclick = () => {
    modal.showModal();
}

// Fechar o modal
btnCancel.onclick = () => {
    modal.close();
}

// Fecha o modal ao tocar/clicar fora.
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});