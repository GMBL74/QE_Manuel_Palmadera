Feature: Checkout

Scenario: Compra completa exitosa
  Given el usuario inicia sesión con las credenciales configuradas
  When agrega un producto al carrito
  And el usuario va al carrito y da click en checkout
  And ingresa sus datos personales
  And finaliza la compra
  Then visualiza mensaje de compra exitosa