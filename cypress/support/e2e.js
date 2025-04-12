import '@shelex/cypress-allure-plugin';
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Registration failed - push service not available')) {
    return false; // Ignora este error y deja que la prueba continúe
  }
  return true; // Deja que Cypress maneje otros errores
});

beforeEach(() => {
  cy.allure().step("Inicio del escenario nuevo");
});
