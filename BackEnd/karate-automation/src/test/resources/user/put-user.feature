Feature: Actualizar usuario

  Background:
    * url baseUrl
    * def user = call read('classpath:helpers/user-data.js')
    * header Authorization = token

  @regresion @smoke
  Scenario: Actualizar usuario existente
    Given path '/usuarios'
    And request user
    When method POST
    Then status 201
    * def userId = response._id

    Given path '/usuarios', userId
    And request
  """
  {
    "nome": "Usuario Actualizado",
    "email": "#(user.email)",
    "password": "#(user.password)",
    "administrador": "#(user.administrador)"
  }
  """
    When method PUT
    Then status 200
