Feature: Buscar usuario por ID

  Background:
    * url baseUrl
    * def user = call read('classpath:helpers/user-data.js')
    * header Authorization = token

  @regresion @smoke
  Scenario: Buscar usuario existente
    Given path '/usuarios'
    And request user
    When method POST
    Then status 201
    * def userId = response._id

    Given path '/usuarios', userId
    When method GET
    Then status 200
    And match response._id == userId
    # validación de contrato con el schema del proyecto
    And match response == read('classpath:schemas/user-schema.json')