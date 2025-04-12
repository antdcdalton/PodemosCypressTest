import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ConocenosPage from "../pages/ConocenosPage";

const conocenosPage = new ConocenosPage();

When("Clic en la seccion Conocenos", () => {
  conocenosPage.selecConocenosSection();
});


When("Se valida video de seccion Conocenos", () => {
conocenosPage.verifyConocenosVideo();
});