import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import PrivacyMesagges from "../pages/PrivacyMesagges";
import '@shelex/cypress-allure-plugin';



const homePage = new HomePage();
const menuPage = new MenuPage();
const privacyMesagges = new PrivacyMesagges();

Given("el usuario navega a la página de Marca", () => {
    cy.allure().feature("marca");
    cy.allure().label("owner", "Antonio");
    cy.allure().step("Se inicia la navegación a la página de Marca");
    cy.allure().attachment("Prueba attachment", "Contenido de ejemplo", "text/plain");
    cy.allure().step("Se inicia la navegacion de la pagina");
    homePage.visit();
});

Then("se cierra el mensaje de privacidad", () => {
    privacyMesagges.getMessages().then(messages => {

        if (messages.length > 0) {
            privacyMesagges.buttonAccept();
        }
    });
});

Then("el logo de Marca es visible", () => {
    homePage.getLogo().should("be.visible");
});

Then("el menú principal contiene la opción {string}", (option) => {
    menuPage.getMenuOption(option).should("exist");
});

Then("la sección de noticias está cargada", () => {
    homePage.getNewsSection().should("be.visible");
});

Then("la URL es correcta", () => {
    cy.url().should("eq", Cypress.config("baseUrl"));
});
