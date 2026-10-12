Feature: Crear usuario

  Background:
    * url baseUrl
    * def user = call read('classpath:helpers/user-data.js')
    * header Authorization = token

  @regresion @smoke
  Scenario: Crear usuario válido
    Given path '/usuarios'
    And request user
    When method POST
    Then status 201
    And match response.message contains 'Cadastro realizado'