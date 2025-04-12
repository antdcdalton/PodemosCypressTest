export const HomeLocators = {
  searchInput: "#search-input",     // Selector para el campo de búsqueda
  footerContainer: ".footer-links",    // Selector para el contenedor del footer
  openContainer: ".elementor-menu-toggle",
  iniciarSolicitudBoton: "a[href='/llena-tu-solicitud/']",
  avisoPrivacidadCheck: ".forminator-checkbox-box",
  enviarBoton: ".forminator-button",
  mensajePodemosConfirmacion: ".mensajePodemos",
  // cypress/support/locators/FormLocators.js
  // Este locator se usará de forma dinámica con diferentes valores de name,
   iniciarSolicitudfield: (nameValue) => `input[name="${nameValue}"], textarea[name="${nameValue}"]`
};
