Feature: F001 - Crear una nueva pagina

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el login, la creación y publicación de una pagina
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  Then I click login
  And I wait for 1 seconds
  When I click button page
  When I click button new
  When I enter titulo "<title_new_page>"
  When I enter description "<description>"
  And I wait for 1 seconds
  When I click Publish
  When I click Continue final review
  When I click publish right now
  When I click back editor
  Then I click back