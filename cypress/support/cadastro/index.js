/// <reference types ="cypress"/>
import { EL_CADASTRO } from './elementos';

class Cadastro {
  cadastrarEntregador(nome, cpf, email, wpp, cep, numero, complemento, cnh){
    cy.get(EL_CADASTRO.inputNome).type(nome);
    cy.get(EL_CADASTRO.inputCpf).type(cpf);
    cy.get(EL_CADASTRO.inputEmail).type(email);
    cy.get(EL_CADASTRO.inputWpp).type(wpp);
    cy.get(EL_CADASTRO.inputCep).type(cep);
    cy.get(EL_CADASTRO.inputBotaoCep).click();
    cy.wait(1500);
    cy.get(EL_CADASTRO.inputNumero).type(numero);
    cy.get(EL_CADASTRO.inputComplemento).type(complemento);
    cy.get(EL_CADASTRO.imgBotaoBicicleta).click();
    cy.get(EL_CADASTRO.inputUploadCnh).selectFile(cnh, { force: true });
    cy.get(EL_CADASTRO.buttonBotaoFinalizarCadastro).click();
  }

  validarCadastroEfetuadoComSucesso(){
    cy.get(EL_CADASTRO.divCadastradoComSucesso).should('be.visible');
  }
}

export default new Cadastro();
