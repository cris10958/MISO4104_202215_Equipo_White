Feature: F002 - Actualizar una pagina

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el login, la creación y actualización de una pagina
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  Then I click login
  And I wait for 2 seconds
  When I click button page
  When I click button new
  When I enter titulo "<title_new_page>"
  When I enter description "<description>"
  When I click button publish
  When I confirm
  Then I click back page
  When I open edition
  When I edit titulo "<new_title_page>"
  When I update
  When I confirm
  Then I click back page
