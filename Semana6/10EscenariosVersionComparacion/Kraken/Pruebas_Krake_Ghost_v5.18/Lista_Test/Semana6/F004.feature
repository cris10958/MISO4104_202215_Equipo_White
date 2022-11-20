Feature: F004 - Editar un post

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el login, la creación, publicación y edición de un post
  Given I navigate to page "http://localhost:2369/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  Then I click login
  And I wait for 1 seconds
  When I open post
  When I click button new
  When I enter titulo "<title_new_post>"
  When I enter description "<description_post>"
  And I wait for 1 seconds
  When I click Publish
  When I click Continue final review
  When I click publish right now
  When I click back editor
  When I click back
  When I open edition
  Then I enter titulo "<new_title_post>"
  When I update
  Then I click back