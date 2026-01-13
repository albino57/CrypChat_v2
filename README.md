# 📟 CrypChat

![Versão](https://img.shields.io/badge/versão-v0.2.0-green?style=for-the-badge&color=003B00&labelColor=000000)
[![Changelog](https://img.shields.io/badge/changelog-visualizar-blue?style=for-the-badge&color=003B00&labelColor=000000)](CHANGELOG.md)
[![Status do Projeto](https://img.shields.io/badge/status-em_desenvolvimento-yellow?style=for-the-badge&color=003B00&labelColor=000000)](CHANGELOG.md)

[![Link da Aplicação](https://img.shields.io/badge/Acesse_o_App-Link-blue?style=for-the-badge&color=003B00&labelColor=000000)](https://www.crypchat.com.br)

> **Status:** 🌐 Online em [www.crypchat.com.br](https://www.crypchat.com.br)

---

O **CrypChat** é uma plataforma de comunicação criptografada projetada para cenários onde a conectividade é lenta e a segurança é inegociável com vários tamanhos de criptografia. Sua arquitetura é baseada no princípio da **Evolução Contínua**, permitindo que o sistema funcione desde navegadores antigos (Modo Vanilla) até interfaces modernas e ricas (Modo Vue).

---

## 🚀 O que há de novo na v0.2.0?

Esta versão traz a conclusão da **Página de Login**, além da **versão legacy** ter sido descontinuada.

- **♿ Acessibilidade:** Implementação de acessibilidade a **Narradores de Texto**.
- **🎨 UI:** Implementação do modal de 'Registro'.

Para uma lista completa e detalhada de funcionalidades adicionadas e correções de bugs, por favor, consulte o arquivo **[CHANGELOG.md](CHANGELOG.md)**.

---

## 🛠️ Tecnologias & Ferramentas

O projeto utiliza uma stack **FullStack** focada em performance e compatibilidade máxima:

* **Linguagens:** `JavaScript ES6+`, `TypeScript` (Criptografia) e `HTML5/CSS3`.
* **Ambiente de Execução:** [Node.js](https://nodejs.org/) (Backend).
* **Frameworks:** [Express](https://expressjs.com/pt-br/) (Servidor de API) e [Vue.js 3](https://vuejs.org/) (Interface Moderna).
* **CrypChat Server:** [Raspberry Pi](https://www.raspberrypi.org/) (Nó central de comunicação local).
* **Infraestrutura Cloud:** [Google Cloud Functions](https://cloud.google.com/functions) (Escalabilidade e redundância).
* **Interfaces:** 
    * **Modo Raiz:** Vanilla JS (Focado em baixa latência e compatibilidade).
    * **Modo Normal:** Vue.js (Interface rica e alta performance).
* **Build & Deploy:** [Vite](https://vitejs.dev/), [Vercel](https://vercel.com/) e [Registro.br](https://registro.br/).

---

## 📁 Estrutura do Projeto

A organização dos diretórios reflete a separação entre núcleo de segurança, interface básica e interface rica:

```text
crypchat/
├── index.html                      # Ponto de entrada (Login Vanilla)
├── public/
│   ├── versions.json               # Histórico de versões
│   ├── vanilla_scripts             # Descontinuado
│   |   ├── set_theme_legacy.js     # Descontinuado
│   |   ├── modal_register_legacy.js# Descontinuado
│   |   └── version_legacy.js       # Descontinuado
│   ├── vanilla_styles
│   │   ├── styles-login_dark.css   # Estilo CSS do modo vanilla no tema escuro
│   │   └── styles-login_light.css  # Estilo CSS do modo vanilla no tema claro
├── src/
│   ├── core/                       # Script typeScript da Lógica de segurança e criptografia
│   │   └── crypto_engine.ts
│   ├── common/                     # DNA Visual (Cores, Fontes e Keyframes Globais)
│   ├── vanilla/                    # Scripts JavaScript
│   │   ├── styles/                 # Layouts específicos do modo raiz
│   │   ├── chatPage_scripts
│   │   │   └── chat_page_vanilla.js  
│   │   ├── loginPage_scripts    
│   │   │   ├── login_page_vanilla.js
│   │   │   ├── set_theme.js
│   │   │   └── version.js
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