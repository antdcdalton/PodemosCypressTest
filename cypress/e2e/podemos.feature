Feature: Validación de la página Podemos.mx
  Scenario: Cargar la página de inicio y verificar el título
    Given que el usuario navega a la página de inicio
    When el título de la página debe ser "Podemos Progresar – Mujer Podemos"

  Scenario: Cargar la página de conocenos y verificar se muestre video informativo
    Given que el usuario navega a la página de inicio
    When el título de la página debe ser "Podemos Progresar – Mujer Podemos"
    When Abre el menu de opciones del contenedor
    When Clic en la seccion Conocenos
    Then Se valida video de seccion Conocenos


  Scenario: llenar el formulario de solicitud
    Given que el usuario navega a la página de inicio
    When el título de la página debe ser "Podemos Progresar – Mujer Podemos"
    When Clic en Iniciar solicitud
    When el usuario ingresa "Juan " en el campo "nombre"
    When el usuario ingresa "Lopez" en el campo "apellidos"
    When el usuario ingresa "1234567890" en el campo "teléfono"
    When el usuario ingresa "juan@email.com" en el campo "correo"
    When el usuario ingresa "Comentario de prueba ayuda" en el campo "como te ayudamos"
    When Clic en check aviso de Privacidad
    When Clic en enviar solicitud
    Then Se muestra mensaje de confirmacion de envio
