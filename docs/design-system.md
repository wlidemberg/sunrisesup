# Design System - Sunrise SUP (Guarderia Surf Club)

![Status](https://img.shields.io/badge/Status-Ativo-success)
![Tema](https://img.shields.io/badge/Tema-Sunrise_Navy_Yellow-yellow)

Ficha técnica de tokens de cor, tipografia e diretrizes de layout fiéis ao protótipo da Guarderia Surf Club em Copacabana.

## 1. Paleta de Cores Oficial

| Token | Hex / HSL | Descrição |
| :--- | :--- | :--- |
| `sunrise-yellow` | `#FCD04B` | Amarelo Solar principal dos botões CTA e destaques |
| `sunrise-yellow-hover` | `#F3C432` | Estado de hover dos botões primários |
| `sunrise-navy` | `#112D4E` | Azul Marinho das seções principais e cabeçalho |
| `sunrise-navy-dark` | `#0B1D33` | Azul Noturno do header fixo e detalhes |
| `sunrise-cerulean` | `#2B7EA1` | Azul Cerúleo para badges e cartões de apoio |
| `sunrise-foam` | `#95C3D7` | Azul Espuma para textos secundários |
| `sunrise-sand` | `#EBF6FA` | Fundo suave de cards editoriais |
| `sunrise-slate` | `#475569` | Cor de texto para descrições de leitura |

## 2. Tipografia

- **Títulos e Headings**: `Outfit`, `sans-serif` (pesos 600, 700, 800, 900)
- **Corpo de Texto**: `Inter`, `sans-serif` (pesos 300, 400, 500, 600)

| Elemento | Fonte | Tamanho / Estilo |
| :--- | :--- | :--- |
| H1 Hero | Outfit | 3.5rem (56px) Bold / Black |
| H2 Seções | Outfit | 2.25rem (36px) Black |
| H3 Subseções | Outfit | 1.5rem (24px) Bold |
| Botões Solar | Outfit | 0.875rem (14px) 800 Uppercase |
| Corpo de Texto | Inter | 0.875rem - 1.0rem (14-16px) Regular |

## 3. Componentes do Design

### Botão Solar (`.btn-solar`)
- Background: `#FCD04B`
- Cor do Texto: `#112D4E`
- Font: `Outfit` 800 Uppercase
- Radius: `50px`
- Sombra: `0 8px 22px rgba(252, 208, 75, 0.45)`

### Cápsula Flutuante de Redes Sociais (`.sunrise-floating-glass-dock`)
- Posição: `fixed`, `right: 14px`, `top: 50%`
- Fundo: Glassmorphism `rgba(17, 45, 78, 0.55)` com `backdrop-filter: blur(16px)`
- Ícones: WhatsApp, Instagram, TikTok

### Botão Flutuante Atendente Virtual ("Sunnys • Guia Virtual")
- Posição: `fixed`, `bottom: 24px`, `right: 24px`
- Ícone circular com a marca Sunrise SUP + texto em amarelo solar.
