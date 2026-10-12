Feature: Eliminar usuario

  Background:
    * print baseUrl
    * print token
    * url baseUrl
    * def user = call read('classpath:helpers/user-data.js')
    * header Authorization = token


  @regresion
  Scenario: Eliminar usuario existente
    Given path '/usuarios'
    And request user
    When method POST
    Then status 201
    * def userId = response._id

    Given path '/usuarios', userId
    When method DELETE
    Then status 200

    # Verificar que el usuario ya no existe (recurso eliminado)
    Given path '/usuarios', userId
    When method GET
    Then status 404
