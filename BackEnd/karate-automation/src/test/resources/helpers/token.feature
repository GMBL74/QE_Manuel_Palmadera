Feature: Token

  # Token real de ServeRest: login con la cuenta de automatización del equipo
  Scenario: generar token
    Given url baseUrl
    And path '/login'
    And request { email: 'qa.automation@serverest.dev', password: 'Qa123456' }
    When method POST
    Then status 200
    * def token = response.authorization
