class MenuPage {
    getMenuOption(option) {
        return cy.contains('nav', option); // Busca la opción en el menú
    }
}

export default MenuPage;
