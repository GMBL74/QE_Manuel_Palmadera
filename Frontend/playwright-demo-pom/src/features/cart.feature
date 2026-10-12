Feature: Carrito de compras

Scenario: Agregar producto al carrito
  Given el usuario inicia sesión con las credenciales configuradas
  When agrega un producto al carrito
  Then el carrito muestra el producto agregado