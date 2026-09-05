describe('Fluxo de Navegação e Reservas - Sunrise SUP (Guarderia Surf Club)', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve carregar a home com a marca Guarderia Surf Club e o hero do Passeio Nascer do Sol', () => {
    cy.contains('SUNRISE SUP').should('be.visible');
    cy.contains('Guarderia Surf Club • Copacabana').should('be.visible');
    cy.contains('Desperte com o Sol no Mar de Copacabana').should('be.visible');
    cy.contains('R$ 150,00').should('be.visible');
  });

  it('deve navegar entre as 5 abas da plataforma (Início, Sobre Nós, Como Trabalhamos, Reservas, Contato)', () => {
    cy.contains('button', 'Sobre Nós').click();
    cy.contains('Conexão com o Mar na Guarderia Surf Club').should('be.visible');

    cy.contains('button', 'Como Trabalhamos').click();
    cy.contains('Entenda o fluxo completo da sua manhã').should('be.visible');
    cy.contains('Recepção dos Participantes').should('be.visible');

    cy.contains('button', 'Reservas Online').click();
    cy.contains('Reserve sua Vaga no Amanhecer').should('be.visible');
    cy.contains('Calendário de Agendamento').should('be.visible');

    cy.contains('button', 'Contato & Localização').click();
    cy.contains('Fale com a Sunrise SUP').should('be.visible');
    cy.contains('R. Francisco Otaviano, 42 - Copacabana').should('be.visible');
  });

  it('deve selecionar participantes no calendário de reservas e atualizar o valor total dinamicamente', () => {
    cy.contains('button', 'Reservas Online').click();
    cy.get('#wc-booking-persons').clear().type('3');
    cy.contains('R$ 450,00').should('be.visible');
  });
});
