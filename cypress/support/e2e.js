import './commands';
require('cypress-xpath');

Cypress.on('uncaught:exception', () => {
    return false;
});