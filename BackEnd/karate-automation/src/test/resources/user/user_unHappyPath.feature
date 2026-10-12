
Feature: API Usuarios - ServeRest

  Background:
    * url baseUrl
    * def auth = call read('classpath:helpers/Token.feature')
    * def token = auth.token
    * header Authorization = token

@regresion @negative
  Scenario: Obtener usuarios con parámetro inválido
    Given path '/usuarios'
    And param limit = -5
    When method GET
    Then status 400
    And print response
    And match response.limit == 'limit não é permitido'

@regresion @negative
  Scenario: Validar error 404 usuario no existe
    Given path '/usuarios/1234567890abcdef'
    When method GET
    Then status 400
    And print response
    And match response.message contains 'não encontrado'

