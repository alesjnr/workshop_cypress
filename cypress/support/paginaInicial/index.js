/// <reference types ="cypress"/>
import { EL_PAGINA_INICIAL } from './elementos';

class PaginaInicial {
  clicarNoBotaoDeCadastro() {
    cy.get(EL_PAGINA_INICIAL.aBotaoCadastrar).click();
  }
}

export default new PaginaInicial();
