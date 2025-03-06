
class PrivacyMesagges {
  getMessages(){

        return cy.get('.didomi-popup-notice-text-container');
    }


    buttonAccept(){
        cy.allure().step("Inicio de test");
                cy.allure().attachment("Adjunto", "Contenido de ejemplo", "text/plain");
                cy.get('#ue-accept-notice-button').click();
        }
}
export default PrivacyMesagges;