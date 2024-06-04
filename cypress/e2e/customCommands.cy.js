/// <reference types ="cypress"/>

describe('Modo custom commands.', () => {
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
    cy.clicarNoBotaoDeCadastro();
    cy.cadastrarEntregador(nome, cpf, email, wpp, cep, numero, complemento, cnh);
    cy.validarEntregradorCadastrado();
  })
});