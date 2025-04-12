import { HomeLocators } from "../Locators/HomeLocators";

const fieldMapping = {
  "nombre": "name-1",
  "apellidos": "text-1",
  "teléfono": "phone-1",
  "correo": "email-1",
  "como te ayudamos": "textarea-1"
};

class HomePage {
  search(keyword) {
    cy.get(HomeLocators.searchInput)
      .clear()
      .type(`${keyword}{enter}`);
  }

  verifyFooterLinks() {
    cy.get(HomeLocators.footerContainer).should("be.visible");
  }

    clicContainersMenu() {
      cy.get(HomeLocators.openContainer).click();
    }

  getFooterLinks() {
    return cy.get(`${HomeLocators.footerContainer} a`);
  }

  clickLink(linkText) {
    cy.contains("a", linkText).click();
  }
  clickIniciaSolicitudBoton() {
  cy.get(HomeLocators.iniciarSolicitudBoton).eq(1).click();
  }

   typeInFieldByAlias(alias, data) {
      const fieldName = fieldMapping[alias];
      if (!fieldName) {
        throw new Error(`No se encontró un mapeo para el alias "${alias}"`);
      }
      cy.get(HomeLocators.iniciarSolicitudfield(fieldName))
        .should("exist")
        .clear()
        .type(data);
    }


      clicAvisoPrivacidadBoton() {
          cy.get(HomeLocators.avisoPrivacidadCheck).click();
        }

      clicEnviarBoton() {
         cy.get(HomeLocators.enviarBoton).click();
      }

        verifyMensajeConfirmacion() {
          cy.get(HomeLocators.mensajePodemosConfirmacion).should("be.visible");
        }

}

export default HomePage;
