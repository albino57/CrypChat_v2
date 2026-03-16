// /src/scripts/version.js

async function versionButton() {
    const btn = document.querySelector('.btn-info'); // Busca no HTML o primeiro elemento que tenha a classe CSS '.btn-info' e o armazena na variável para manipulação.

    if (btn) btn.innerText = "CrypChat v..."; // Renderiza o texto do botão sem mostrar a versão porque ainda será consultado.

    try {
        const response = await fetch('./public/versions.json?t=' + Date.now()); // Adiciona um timestamp à response para forçar o download novo e evitar que o navegador use versões antigas salvas em cache

        if (!response.ok) throw new Error("Erro HTTP: " + response.status); // Força o erro e ir para catch caso o fetch caso servidor responda .json não existe.

        const data = await response.json(); // Extrai os dados do stream de resposta e faz o parse de JSON para Objeto.
        const current = data.latest_version;

        btn.innerText = "CrypChat v" + current; // Aqui o botão de versão já recebe o texto dinamicamente

        btn.onclick = function () { //Abre a caixa no navegador
            let changesArray = data.history?.[0]?.changes || []; // ↓ o '?' é para saber se o arquivo existe e se 'changes' tem algum valor.
            // ↓ .map() é um laço de repetição. Usado quando quiser transformar dados de uma lista em uma nova lista
            // ↓ .join('\n') faz o tratamento da string. Remove aspas, virgulas e pula linha igual.
            let lastChangeFormatted = changesArray.map(linha => `• ${linha}`).join('\n');
            alert(`📟 CRYPCHAT VERSÃO v ${current}
---------------------------------
Último Update ↓
${lastChangeFormatted}
---------------------------------
📜 CHANGELOG completo em:
github.com/albino57/CrypChat_v2`
            );
        };

    } catch (error) {
        console.error("Erro ao carregar versão:", error);

        // If para escrever no botão que tem erro.
        if (btn) {
            btn.style.color = "#ff3333";
            btn.style.cursor = "help";
            btn.textContent = "[!] Erro no versions.json";
            btn.title = "📟 ERRO: Arquivo versions.json inacessível ou corrompido.";
        }
    }
}
versionButton();