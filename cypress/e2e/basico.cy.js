/// <reference types ="cypress"/>

describe('Modo basico.', () => {
  let nome = 'Rafael Pedro Sales';
  let cpf = '23254256654';
  let email = 'rafael-sales99@itau-unibanco.com.br';
  let wpp = '(51)99873-9315';
  let cep = '94856-470';
  let numero = '852';
  let complemento = "Casa";
  let cnh = 'cypress/fixtures/cnh.jpg';

  it('Cadastrar entregador com sucesso.', () => {
    cy.visit('/');
    cy.get('a[href="/deliver"]').click();
    cy.get('input[name="name"]').type(nome);
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="whatsapp"]').type(wpp);
    cy.get('input[name="postalcode"]').type(cep);
    cy.get('input[type="button"]').click();
    cy.wait(1500);
    cy.get('input[name="address-number"]').type(numero);
    cy.get('input[name="address-details"]').type(complemento);
    cy.get('img[alt="Bicicleta"]').click();
    cy.get('input[accept="image/*"]').selectFile(cnh, { force: true });
    cy.get('button[type="submit"]').click();
    cy.get('div[class*="swal2-icon-success"]').should('be.visible');
  })
})