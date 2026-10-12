Feature: Login en Sauce Demo

@ui @login1
Scenario: Login exitoso con usuario válido
  Given el usuario ingresa como "standard_user"
  Then visualiza la página de productos

@ui @login2
Scenario: Login fallido con usuario bloqueado
  Given el usuario ingresa como "locked_out_user"
  Then se muestra un mensaje de error
