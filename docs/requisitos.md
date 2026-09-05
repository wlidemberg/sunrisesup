# Requisitos do Sistema - Sunrise SUP (Guarderia Surf Club - Copacabana)

![Status](https://img.shields.io/badge/Status-Atualizado-blue)
![Versao](https://img.shields.io/badge/Versao-2.0.0-green)

Especificação de requisitos funcionais, não funcionais e regras de negócio alinhadas à experiência única do passeio Nascer do Sol na Guarderia Surf Club em Copacabana.

## 1. Visão Geral
O Sunrise SUP é a escola e guarderia oficial de Stand Up Paddle localizada na Guarderia Surf Club (R. Francisco Otaviano, 42 - Copacabana, Rio de Janeiro). A plataforma oferece agendamento exclusivo do Passeio Nascer do Sol das 05:30 AM pelo valor de R$ 150,00 por participante.

## 2. Requisitos Funcionais (RF)

| ID | Nome | Descrição | Prioridade |
| :--- | :--- | :--- | :--- |
| RF-001 | Navegação Multi-Páginas (SPA) | Permitir alternar entre as 5 telas: Início, Sobre Nós, Como Trabalhamos (10 Passos), Reservas Online e Contato. | Alta |
| RF-002 | Experiência de Passeio Único | Apresentar e agendar o Passeio Nascer do Sol (05:30 AM) por R$ 150,00 com fotos, instrutor e equipamentos inclusos. | Alta |
| RF-003 | Calendário de Agendamento | Exibir calendário mensal com seleção de data, seletor de participantes e cálculo do valor total. | Alta |
| RF-004 | Fluxo de 10 Passos do Remador | Exibir os 10 passos sequenciais da experiência (da recepção à ducha e envio das fotos). | Média |
| RF-005 | Formulário de Contato & WhatsApp | Permitir envio de mensagens para a equipe e link direto para atendimento no WhatsApp +55 21 99846-0818. | Média |
| RF-006 | FAQ com Sanfona (Accordion) | Disponibilizar perguntas frequentes sobre chuva, fotos, cancelamento e iniciantes. | Média |

## 3. Requisitos Não Funcionais (RNF)

| ID | Nome | Descrição | Critério de Aceite |
| :--- | :--- | :--- | :--- |
| RNF-001 | Identidade Visual Guarderia | Aplicação estrita da paleta Sunrise Navy (`#112D4E`), Sunrise Yellow (`#FCD04B`) e Cerulean (`#2B7EA1`). | Ficha técnica em design-system.md |
| RNF-002 | Tipografia | Utilizar a fonte `Outfit` para títulos e `Inter` para texto de leitura. | Importação via Google Fonts |
| RNF-003 | Responsividade & Mobile Drawer | Menu superior adaptável para dispositivos móveis com suporte a gaveta de navegação. | Breakpoints sm, md, lg |
| RNF-004 | Widgets Flutuantes | Manter a barra lateral de redes sociais e o botão flutuante Sunnys Guia Virtual visíveis. | Posições fixed z-index 70 |

## 4. Regras de Negócio (RN)

| ID | Regra | Descrição |
| :--- | :--- | :--- |
| RN-001 | Horário Único de Saída | O passeio possui saída única e diária às 05:30 AM (Nascer do Sol no Mar). |
| RN-002 | Preço Fixo Por Participante | O valor é fixo em R$ 150,00 por participante, incluindo fotos, instrução, colete e prancha. |
| RN-003 | Política de Cancelamento de 48h | Cancelamentos ou alterações feitas com até 48 horas de antecedência possuem reembolso integral de 100%. |
| RN-004 | Equipamentos e Estrutura Inclusa | Toda reserva inclui ducha de água doce, guarda-volumes na guarderia, colete homologado e leash. |
