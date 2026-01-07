# 📟 CrypChat

![Versão](https://img.shields.io/badge/versão-v0.1.1-green?style=for-the-badge&color=00FF41&labelColor=000000)
[![Changelog](https://img.shields.io/badge/changelog-visualizar-blue?style=for-the-badge&color=00FF41&labelColor=000000)](CHANGELOG.md)
[![Status do Projeto](https://img.shields.io/badge/status-em_desenvolvimento-yellow?style=for-the-badge&color=00FF41&labelColor=000000)](CHANGELOG.md)

[![Link da Aplicação](https://img.shields.io/badge/Acesse_o_App-Link-blue?style=for-the-badge&color=00FF41&labelColor=000000)](https://www.crypchat.com.br)

> **Status:** 🌐 Online em [www.crypchat.com.br](https://www.crypchat.com.br)

O **CrypChat** é uma plataforma de comunicação criptografada projetada para cenários onde a conectividade é lenta e a segurança é inegociável com vários tamanhos de criptografia. Sua arquitetura é baseada no princípio da **Evolução Contínua**, permitindo que o sistema funcione desde navegadores antigos (Modo Vanilla) até interfaces modernas e ricas (Modo Vue).

## 🚀 O que há de novo na v0.1.1?

Esta fase inicial estabeleceu a fundação visual e estrutural do projeto.
Para uma lista completa e detalhada de funcionalidades adicionadas e correções de bugs, por favor, consulte o arquivo **[CHANGELOG.md](CHANGELOG.md)**.

*   **Resiliência Total:** Interface capaz de operar em telas menores que 315px com scrolbar.
*   **DNA Visual Matrix:** Estética baseada em terminais de comando com animações nativas de instabilidade de sinal (Flicker).
*   **Zero Dependência:** Modo de login 100% Vanilla JS/CSS para garantir o acesso mesmo sob alta latência.

## 📁 Estrutura do Projeto

A organização dos diretórios reflete a separação entre núcleo de segurança, interface básica e interface rica:

```text
crypchat/
├── index.html                      # Ponto de entrada (Login Vanilla)
├── public/
│   ├── versions.json               # Histórico de versões (Carregamento Preguiçoso)
│   ├── vanilla_styles
│   │   ├── styles-login_dark.css   # Estilo CSS do modo vanilla no tema escuro
│   │   └── styles-login_light.css  # Estilo CSS do modo vanilla no tema claro
├── src/
│   ├── core/                       # Script typeScript da Lógica de segurança e criptografia
│   │   └── crypto_engine.ts
│   ├── common/                     # DNA Visual (Cores, Fontes e Keyframes Globais)
│   ├── vanilla/                    # Scripts JavaScript
│   │   ├── styles/                 # Layouts específicos do modo raiz
│   │   ├── chat_page_vanilla.js    
│   │   ├── login_page_vanilla.js
│   │   ├── set_theme_legacy.js
│   │   └── set_theme.js
│   └── vue/                        # Interface de Alta Performance (Framework)
│       ├── views/                  # Estruturas macro das telas
│       └── components/             # Peças reutilizáveis da interface
├── .gitignore
├── CHANGELOG.md
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── README.md
├── tailwind.config.js