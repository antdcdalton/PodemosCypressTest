import '@shelex/cypress-allure-plugin';
import 'cypress-xpath';


beforeEach(() => {
  cy.allure().step("Inicio del beforeEach");
});
