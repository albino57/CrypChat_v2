// /src/vanilla/loginPage_script/version.js

async function versionButton() {
    const btn = document.querySelector('.btn-info'); // Busca no HTML o primeiro elemento que tenha a classe CSS '.btn-info' e o armazena na variável para manipulação.

    if (btn) btn.innerText = "CrypChat v..."; // Renderiza o texto do botão sem mostrar a versão porque ainda será consultado.

    try {
        const url = await fetch('versions.json?t=' + Date.now()); // Adiciona um timestamp à URL para forçar o download novo e evitar que o navegador use versões antigas salvas em cache
        const data = await url.json();
        const current = data.latest_version;

        btn.innerText = "CrypChat v" + current; // Aqui o botão de versão já recebe o texto dinamicamente

        btn.onclick = function () { //Abre a caixa no navegador
            let changesArray = data.history?.[0]?.changes || []; // ↓ o '?' é para saber se o arquivo existe e se 'changes' tem algum valor.
            // ↓ .map() é um laço de repetição. Usado quando quiser transformar dados de uma lista em uma nova lista
            // ↓ .join('\n') faz o tratamento da string. Remove aspas, virgulas e pula linha igual.
            let lastChangeFormatted = changesArray.map(linha => `• ${linha}`).join('\n');
            alert(`📟 CRYPCHAT VERSÃO v ${current}
---------------------------------
Último Update ↓ ${lastChangeFormatted}
---------------------------------
📜 CHANGELOG completo em:
github.com/albino57/CrypChat_v2`
            );
        };

    } catch (error) {
        console.error("Erro ao carregar versão:", error);

        // Se o botão existir, avisamos o usuário no clique
        if (btn) {
            btn.onclick = function () {
                alert("📟 ERRO: Arquivo versions.json inacessível ou corrompido.");
            };
        }

        // If para escrever no botão que tem erro.
        if (btn) {
            btn.innerHTML = "<span style='color: #ff3333;'> [!] Erro no versions.json </span>";
        }
    }
}
versionButton();