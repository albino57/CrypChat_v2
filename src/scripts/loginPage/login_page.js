// /src/scripts/loginPage/login_page.js

const btnConnect = document.querySelector('.btn-connect');

//-----↓ Função de transição de página ↓-----
if (btnConnect) {
    btnConnect.onclick = (e) => { // 'e' é abreviação de event e ele contém todos os detalhes técnicos do clique específico.
        e.preventDefault();       // 'preventDefault()' Previne o comportamento padrão, "Não faça o que você faria normalmente (recarregar a página). Deixa que o meu código JavaScript assume o comando daqui pra frente."

        window.location.href = "chat.html"; // Conecta na página de chat.
    };
}
//-----↑ Função de transição de página ↑-----