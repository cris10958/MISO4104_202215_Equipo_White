Feature: Crear una nueva pagina

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el sign in, el sing out y valido la redirección al login
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  Then I click login
  And I wait for 3 seconds
  When I open menu person
  And I wait for 1 seconds
  When I sing out aplication
  And I wait for 2 seconds
  Then I enter email "<USERNAME>"
  And I wait for 5 seconds