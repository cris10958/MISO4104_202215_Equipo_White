Feature: F001 - Crear una nueva pagina

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el login, la creación y publicación de una pagina
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  Then I click login
  When I click button page
  When I click button new
  When I enter titulo "<title_new_page>"
  When I enter description "<description>"
  When I click button publish
  When I confirm
  Then I click back page