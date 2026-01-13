// ./public/vanilla_scripts/modal_register_legacy.js

var modal = document.getElementById('modal-register');
var btnOpen = document.querySelector('.btn-register');
var btnCancel = document.querySelector('.btn-cancel');

// Abre o modal
btnOpen.onclick = function() {
    modal.showModal();
}

// Fechar o modal
btnCancel.onclick = function() {
    modal.close();
}

// Fecha o modal ao tocar/clicar fora.
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.close();
    }
});