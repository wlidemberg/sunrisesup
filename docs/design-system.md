# Design System - Sunrise SUP

![Status](https://img.shields.io/badge/Status-Ativo-success)
![Tema](https://img.shields.io/badge/Tema-Ocean_Sunrise-cyan)

Especificação dos tokens de design, paleta de cores, tipografia e diretrizes de componentes da interface do Sunrise SUP.

## 1. Paleta de Cores (Ocean Sunrise)

### Cores Primárias e Secundárias

| Token | Variável HSL / Hex | Aplicação |
| :--- | :--- | :--- |
| `primary-500` | `hsl(199, 89%, 48%)` / `#0ea5e9` | Cor principal de marca (Ocean Cyan) |
| `primary-600` | `hsl(201, 96%, 32%)` / `#0284c7` | Estados de hover e botões principais |
| `secondary-500` | `hsl(24, 95%, 53%)` / `#f97316` | Acentos e destaque (Sunrise Orange) |
| `secondary-600` | `hsl(21, 90%, 48%)` / `#ea580c` | Hover de botões de destaque/CTA |
| `accent-gold` | `hsl(45, 93%, 47%)` / `#eab308` | Avaliações, estrelas e destaques |

### Neutros e Superfícies (Dark / Light Mode)

| Token | Hex | Aplicação |
| :--- | :--- | :--- |
| `bg-primary` | `#0f172a` (Dark) / `#f8fafc` (Light) | Fundo principal da aplicação |
| `bg-card` | `#1e293b` (Dark) / `#ffffff` (Light) | Superfícies de cards e modais |
| `text-main` | `#f8fafc` (Dark) / `#0f172a` (Light) | Texto principal de leitura |
| `text-muted` | `#94a3b8` (Dark) / `#64748b` (Light) | Textos secundários e descrições |
| `border-subtle`| `#334155` (Dark) / `#e2e8f0` (Light) | Bordas e divisores de elementos |

## 2. Tipografia

- Font-Family Principal: `Inter`, `sans-serif`
- Font-Family Destaques/Títulos: `Outfit`, `sans-serif`

| Escala | Tamanho | Peso | Line Height |
| :--- | :--- | :--- | :--- |
| Heading 1 | 2.5rem (40px) | Bold (700) | 1.2 |
| Heading 2 | 2.0rem (32px) | Bold (700) | 1.25 |
| Heading 3 | 1.5rem (24px) | SemiBold (600) | 1.3 |
| Body Normal | 1.0rem (16px) | Regular (400) | 1.5 |
| Body Small | 0.875rem (14px)| Medium (500) | 1.4 |

## 3. Sombras e Efeitos Visuais

- Glassmorphism Card: `backdrop-filter: blur(12px); background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1);`
- Card Glow: `box-shadow: 0 10px 30px -10px rgba(14, 165, 233, 0.25);`
- Drop Shadow Buttons: `0 4px 14px 0 rgba(249, 115, 22, 0.39);`

## 4. Componentes Base

### Botões (`Button`)
- Variantes: `primary` (Ocean Cyan), `secondary` (Sunrise Orange), `outline`, `ghost`.
- Tamanhos: `sm` (height: 36px), `md` (height: 44px), `lg` (height: 52px).
- Estados: Normal, Hover, Active, Disabled, Loading (Spinner).

### Cards de Produto / Agendamento (`EquipmentCard`)
- Imagem de capa com efeito zoom no hover.
- Badges de categoria (Aluguel, Aula, Produto).
- Indicador de disponibilidade em tempo real.
- Preço por hora ou valor de compra.

### Modais e Drawers (`Modal`, `CartDrawer`)
- Transição de entrada suave (fade-in + scale).
- Fechamento via tecla ESC e clique fora no backdrop.
