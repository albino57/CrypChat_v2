# Changelog - CrypChat

---
## 2026-01-14
### Added
- Implementação da tela chat principal 'TESTE'.
- Implementação de memória de tema para melhor UX.

### Removed
- Remoção da versão Legacy (Scripts se encontram no diretório ./public/vanillaLegacy_scripts-desc) para fins educaionais.

### Changed
- Mudança de cores do CSSs da página de login.
- Reestruturação de diretórios para compatibilidade de scripts futuramente com vue.
- Reestruturação do CSS de tema.


---
## 2026-01-13
### Added
- Página de Login finalizada.
- Implementação de acessibilidade a Narradores de Texto.
- Implementação do modal de 'Registro'.

### Removed
- Descontinuado a versão Legacy do chat por motivo de segurança.

### Changed
- Melhoria de UI E UX para telas pequenas.

### Fixed
- Correção de corte lateral do card em telas pequenas e restauração do comportamento de scroll horizontal.


---
## 2026-01-08
### Added
- Implementação do nome e versão da aplicação ao invés do nome "InfoVersão".
- Implementação da opção que desativa as animações e transições para usuários com cinetose.
- Implementação do script version_legacy.js.

### Changed
- Reestruturação de diretórios em `/src/vanilla/` para maior escalabilidade.
- Reestruturação de diretórios em `/public/`para compatibilidade de scripts legacy.
- Refatoração estética do Tema Light e animações de Flicker em ambos os temas.
- Refatoração dos arquivos de versão.

### Fixed
- Ajuste de `font-size` em inputs para evitar zoom automático em mobile.
- Correção de scroll indesejado e centralização via `100dvh` para mobile.


---
## 2026-01-07
### Fixed
- Correção de bug de UI/UX na alternância de temas da página de login.


---
## 2026-01-06
### Added
- Estrutura base em HTML5 focada em acessibilidade e suporte a navegadores legados.
- Estilização com tema Matrix/PixelArt em CSS puro (otimizado para baixa largura de banda).
- Adição de efeitos visuais (flicker e pulso) para identidade visual."
- Layout responsivo para telas menores e a partir de 315px (Qualquer display em qualquer lugar).