# 📟 CrypChat

O **CrypChat** é uma plataforma de comunicação criptografada projetada para cenários onde a conectividade é lenta e a segurança é inegociável com vários tamanhos de criptografia. Sua arquitetura é baseada no princípio da **Evolução Contínua**, permitindo que o sistema funcione desde navegadores antigos (Modo Vanilla) até interfaces modernas e ricas (Modo Vue).

## 🚀 Versão 0.1-Alpha (Página de login)

Nesta fase inicial, estabelecemos a fundação visual e estrutural do projeto:
- **Resiliência Total:** Interface capaz de operar em telas menores que 315px com scrolbar.
- **DNA Visual Matrix:** Estética baseada em terminais de comando com animações nativas de instabilidade de sinal (Flicker).
- **Zero Dependência:** Modo de login 100% Vanilla JS/CSS para garantir o acesso mesmo sob alta latência.

## 📁 Estrutura do Projeto

A organização dos diretórios reflete a separação entre núcleo de segurança, interface básica e interface rica:

```text
crypchat/
├── index.html              # Ponto de entrada (Login Vanilla)
├── public/
│   └── versions.json       # Histórico de versões (Carregamento Preguiçoso)
├── src/
│   ├── core/               # Lógica de segurança e criptografia (Agnóstico)
│   │   └── crypto_engine.ts
│   ├── common/             # DNA Visual (Cores, Fontes e Keyframes Globais)
│   ├── vanilla/            # Motor de Resiliência (Puro JS/CSS)
│   │   ├── styles/         # Layouts específicos do modo raiz
│   │   │   ├── styles-login_dark.css
│   │   │   └── styles-login_light.css
│   │   ├── chat_page_vanilla.js
│   │   ├── login_page_vanilla.js
│   │   ├── set_theme_legacy.js
│   │   └── set_theme.js
│   └── vue/                # Interface de Alta Performance (Framework)
│       ├── views/          # Estruturas macro das telas
│       └── components/     # Peças reutilizáveis da interface
└── package.json