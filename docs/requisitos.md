# Requisitos do Sistema - Sunrise SUP

![Status](https://img.shields.io/badge/Status-Em_Definicao-blue)
![Versao](https://img.shields.io/badge/Versao-1.0.0-green)

Documento de especificação de requisitos funcionais, não funcionais e regras de negócio para a plataforma Sunrise SUP.

## 1. Visão Geral
O Sunrise SUP é uma plataforma digital para locação de pranchas e equipamentos de Stand Up Paddle, agendamento de aulas/tours guiados ao amanhecer e venda de acessórios esportivos praianos.

## 2. Requisitos Funcionais (RF)

| ID | Nome | Descrição | Prioridade |
| :--- | :--- | :--- | :--- |
| RF-001 | Catálogo de Equipamentos | Apresentar catálogo de pranchas, remos e acessórios com filtros por categoria, tamanho e nível de experiência. | Alta |
| RF-002 | Agendamento de Locação/Aulas | Permitir escolha de data, horário, duração e local de retirada/instrução para agendamento. | Alta |
| RF-003 | Carrinho de Reservas/Compras | Permitir adicionar itens de locação ou produtos, calcular totais e aplicar cupons promocionais. | Alta |
| RF-004 | Gestão de Reservas do Usuário | Permitir ao cliente visualizar histórico de agendamentos e status das reservas. | Média |
| RF-005 | Painel Administrativo / Operacional | Permitir controle do inventário de pranchas, horários disponíveis e status de manutenção. | Média |
| RF-006 | Avaliações e Depoimentos | Permitir que clientes visualizem e enviem avaliações de experiências no mar. | Baixa |

## 3. Requisitos Não Funcionais (RNF)

| ID | Nome | Descrição | Critério de Aceite |
| :--- | :--- | :--- | :--- |
| RNF-001 | Desempenho e Carregamento | A página inicial e o catálogo devem carregar em menos de 2 segundos em conexões 4G. | Lighthouse Performance >= 90 |
| RNF-002 | Responsividade | Interface adaptável a dispositivos móveis, tablets e desktops (Mobile-First). | Breakpoints Tailwind (sm, md, lg, xl) |
| RNF-003 | Acessibilidade | Conformidade com diretrizes WCAG 2.1 nível AA. | Contraste adequado e navegação por teclado |
| RNF-004 | Cobertura de Testes | Testes unitários para regras de negócio e testes E2E para fluxos críticos. | Cobertura Vitest >= 80% |

## 4. Regras de Negócio (RN)

| ID | Regra | Descrição |
| :--- | :--- | :--- |
| RN-001 | Antecedência Mínima de Agendamento | Agendamentos de locação ou aulas devem ser feitos com no mínimo 2 horas de antecedência. |
| RN-002 | Limite de Equipamentos por Slot | Cada slot de horário possui um limite máximo de 10 pranchas disponíveis simultaneamente. |
| RN-003 | Política de Cancelamento | Cancelamentos efetuados com até 24h de antecedência possuem reembolso integral de 100%. |
| RN-004 | Equipamento Obrigatório de Segurança | Toda reserva de prancha inclui obrigatoriamente colete salva-vidas e leash (cordinha de segurança). |
