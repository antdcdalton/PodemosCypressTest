import '@shelex/cypress-allure-plugin';

class HomePage {
    visit() {
      cy.allure().step("Inicio de test");

        cy.visit(Cypress.config("baseUrl")); // URL parametrizada desde cypress.config.js
    }

    getLogo() {
        return cy.get('[class="logo-marca"]'); // Selector del logo
    }

    getNewsSection() {
        return cy.get('.ue-l-cover-grid'); // Selector de la sección de noticias
    }
}

export default HomePage;
