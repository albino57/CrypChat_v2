// ./public/vanilla_scripts/version_legacy.js

function versionButton() {

    var xhr = new XMLHttpRequest(); // Instancia o objeto responsável por fazer requisições HTTP em navegadores antigos.
    var url = 'versions.json?t=' + new Date().getTime(); // Adiciona um timestamp à URL para forçar o download novo e evitar que o navegador use versões antigas salvas em cache.
    var btn = document.querySelector('.btn-info'); // Busca no HTML o primeiro elemento que tenha a classe CSS '.btn-info' e o armazena na variável para manipulação.
    
    if (btn) {
        btn.innerText = "Aplicação desativada porque usa JS antigo ES5, acesse com um navegador moderno!"; // Renderiza o texto do botão sem mostrar a versão porque ainda será consultado.
    }

    xhr.open('GET', url, true); // Configura a requisição para buscar dados (GET) de forma assíncrona, sem congelar a interface durante o download.
    xhr.onreadystatechange = function () { // Define a função de "callback" que será executada automaticamente a cada mudança de status da conexão (download, erro, sucesso).

        // Se ainda não terminou o download, para a execução aqui e espera a próxima chamada.
        if (xhr.readyState !== 4) { // readyState 4 = Operação concluída.
            return;                 // retorna sem executar o resto do código.
        }

        if (xhr.status === 200) {
            try {
                var data = JSON.parse(xhr.responseText); // Converte o texto cru recebido do servidor em um Objeto JavaScript manipulável.
                var current = data.latest_version;
                var changesArray = [];
                //↓ Lógica para saber se o arquivo existe e se 'changes' tem algum valor.
                if (data && data.history && data.history[0] && data.history[0].changes && data.history[0].changes[0]) {
                    changesArray = data.history[0].changes; // 'changesArray' recebe toda as linhas desorganizadas.
                }

                var lastChangeFormatted = "";
                for (var i = 0; i < changesArray.length; i++) { // Lógica para organizar as linhas.
                    lastChangeFormatted += "• " + changesArray[i];

                    if (i < changesArray.length - 1) { // Lógica que pula a última linha para melhorar o visual.
                        lastChangeFormatted += "\n";
                    }
                }

                if (btn) { // Checa se o botão existe na página antes de tentar manipulá-lo, evitando erros de script caso o botão não seja encontrado.
                    btn.innerText = "Aplicação desativada porque usa JS antigo ES5, acesse com um navegador moderno!" ; // Aqui o botão de versão já recebe o texto dinamicamente.
                    btn.onclick = function () {
                        alert(
                            "📟 CRYPCHAT VERSÃO v" + current + "\n" +
                            "---------------------------------\n" +
                            "Último Update ↓\n" + lastChangeFormatted + "\n" +
                            "---------------------------------\n" +
                            "📜 CHANGELOG completo em:\ngithub.com/albino57/CrypChat_v2"
                        );
                    };
                }

            } catch (e) {
                // Erro: O servidor respondeu 200, mas o JSON está quebrado.
                console.error("Erro ao carregar versão:", e);
                btnErro(btn, "Erro no versions.json");
            }
        } else {
            // Erro de Conexão ou Arquivo não encontrado.
            console.error("Erro na requisição. Status:", xhr.status);
            btnErro(btn, "Erro de Conexão");
        }
    };

    xhr.send();
}

// Função auxiliar para escrever no botão que tem erro.
function btnErro(btn, mensagem) {
    if (btn) {
        btn.innerHTML = "<span style='color: #ff3333;'> [!] " + mensagem + "</span>";
        btn.onclick = function () {
            alert("📟 ERRO: " + mensagem);
        };
    }
}

versionButton();