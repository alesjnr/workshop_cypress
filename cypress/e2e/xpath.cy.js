/// <reference types ="cypress"/>

describe('Modo xpath.', () => {
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
    cy.xpath('/html/body/div/div/div/main/a').click();
    //cy.xpath('//*[@id="page-home"]/div/main/a').click();
    
    cy.xpath('/html/body/div/div/form/fieldset[1]/div[1]/div[1]/input').type(nome);
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[1]/div[1]/div[1]/input').type(nome);
    
    cy.xpath('/html/body/div/div/form/fieldset[1]/div[1]/div[2]/input').type(cpf);
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[1]/div[1]/div[2]/input"]').type(cpf);
    
    cy.xpath('/html/body/div/div/form/fieldset[1]/div[2]/div[1]/input').type(email);
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[1]/div[2]/div[1]/input').type(email);
    
    cy.xpath('/html/body/div/div/form/fieldset[1]/div[2]/div[2]/input').type(wpp);
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[1]/div[2]/div[2]/input').type(wpp);
    
    cy.xpath('/html/body/div/div/form/fieldset[2]/div[1]/div[1]/input').type(cep);
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[2]/div[1]/div[1]/input').type(cep);
    
    cy.xpath('/html/body/div/div/form/fieldset[2]/div[1]/div[2]/input').click();
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[2]/div[1]/div[2]/input').click();
    
    cy.wait(1500);
    
    cy.xpath('/html/body/div/div/form/fieldset[2]/div[3]/div[1]/input').type(numero);
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[2]/div[3]/div[1]/input').type(numero);
    
    cy.xpath('/html/body/div/div/form/fieldset[2]/div[3]/div[2]/input').type(complemento);
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[2]/div[3]/div[2]/input').type(complemento);
    
    cy.xpath('/html/body/div/div/form/fieldset[3]/ul/li[2]/img').click();
    //cy.xpath('//*[@id="page-deliver"]/form/fieldset[2]/div[3]/div[2]/input').click();
    
    cy.xpath('/html/body/div/div/form/div/input').selectFile(cnh, { force: true });
    //cy.xpath('//*[@id="page-deliver"]/form/div/input').selectFile(cnh, { force: true });
    
    cy.xpath('/html/body/div/div/form/button').click();
    //cy.xpath('//*[@id="page-deliver"]/form/button').click();
    
    cy.xpath('/html/body/div[2]/div').should('be.visible');
  })
})