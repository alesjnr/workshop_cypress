Cypress.Commands.add('clicarNoBotaoDeCadastro', () => {
    cy.get('a[href="/deliver"]').click();
});

Cypress.Commands.add('cadastrarEntregador', (nome, cpf, email, wpp, cep, numero, complemento, cnh) => {
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
});

Cypress.Commands.add('validarEntregradorCadastrado', () => {
    cy.get('div[class*="swal2-icon-success"]').should('be.visible');
});