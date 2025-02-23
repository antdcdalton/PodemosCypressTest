  closeMessages(){
          if(cy.get('.didomi-popup-notice-text-container')){
              cy.get('#ue-accept-notice-button').click()
          }
    }