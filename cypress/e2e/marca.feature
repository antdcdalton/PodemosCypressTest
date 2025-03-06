Feature: Validaciones de la página de Marca
  Scenario: Verificar elementos en la página principal
    Given el usuario navega a la página de Marca
    And se cierra el mensaje de privacidad
    Then el logo de Marca es visible
    And el menú principal contiene la opción "Fútbol"
    And la sección de noticias está cargada
    And la URL es correcta