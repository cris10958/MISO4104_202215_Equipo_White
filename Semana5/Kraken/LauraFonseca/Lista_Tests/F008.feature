Feature: Crear una nueva pagina

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el login, la creación, publicación y eliminación de un post
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  Then I click login
  And I wait for 1 seconds
  When I open post
  And I wait for 1 seconds
  When I click new post
  And I wait for 1 seconds
  When I enter titulo post "<title_new_post>"
  And I wait for 1 seconds
  When I enter description post "<description_post>"
  And I wait for 2 seconds
  When I click Publish
  And I wait for 2 seconds
  When I click Continue final review
  And I wait for 1 seconds
  When I click publish post right now
  And I wait for 3 seconds
  When I click back editor
  And I wait for 1 seconds
  When I click back post
  And I wait for 1 seconds
  When I open edition
  And I wait for 1 seconds
  When I open setting
  And I wait for 2 seconds
  When I delete
  And I wait for 1 seconds
  Then I confirm delete
  And I wait for 5 seconds
