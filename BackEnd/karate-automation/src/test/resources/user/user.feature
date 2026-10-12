Feature: API Usuarios - ServeRest

  Background:
    * url baseUrl
    * header Authorization = token

  @regresion @smoke
  Scenario: Obtener lista de usuarios
    Given path '/usuarios'
    When method GET
    Then status 200
    And match response.quantidade == '#number'
    And assert response.quantidade >= 0

