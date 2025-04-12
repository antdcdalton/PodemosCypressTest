import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";

const homePage = new HomePage();

Given("que el usuario navega a la página de inicio", () => {
  cy.visit("/");
});

Then("el título de la página debe ser {string}", (expectedTitle) => {
  cy.title().should("eq", expectedTitle);
});


When("Abre el menu de opciones del contenedor", () => {
  homePage.clicContainersMenu();
});

When("Clic en Iniciar solicitud", () => {
homePage.clickIniciaSolicitudBoton();
});

When("el usuario ingresa {string} en el campo {string}", (data, alias) => {
  homePage.typeInFieldByAlias(alias, data);
});

When("Clic en check aviso de Privacidad", () => {
homePage.clicAvisoPrivacidadBoton();
});

When("Clic en enviar solicitud", () => {
homePage.clicEnviarBoton();
});


Then("Se muestra mensaje de confirmacion de envio", () => {
homePage.verifyMensajeConfirmacion();
});

//Then("todos los enlaces deben estar visibles y funcionen correctamente", () => {
//  homePage.getFooterLinks().each(($link) => {
//    cy.wrap($link).should("be.visible");
//    cy.wrap($link).invoke("attr", "href").should("not.be.empty");
//  });
//});
