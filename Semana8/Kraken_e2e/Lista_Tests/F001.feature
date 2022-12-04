Feature: Crear una nueva pagina

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el login, la creación y publicación de una pagina
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  Then I click login
  And I wait for 1 seconds
  When I click button page
  And I wait for 1 seconds
  When I click button new page
  And I wait for 1 seconds
  When I enter titulo page "<title_new_page>"
  And I wait for 1 seconds
  When I enter description page "<description>"
  And I wait for 2 seconds
  When I click button publish
  And I wait for 1 seconds
  When I click Continue final review
  And I wait for 5 seconds
  When I click Publish page right now
  And I wait for 5 seconds
  When I click back editor
  And I wait for 1 seconds
  Then I click back page
  And I wait for 5 seconds
  
