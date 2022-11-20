Feature: Actualización de un post

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el login, la creación y actualización de un post
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  When I enter password "<PASSWORD>"
  And I wait for 1 seconds
  Then I click login
  And I wait for 5 seconds
  When I open post
  And I wait for 1 seconds
  When I click button new
  And I wait for 1 seconds
  When I enter titulo "<title_new_post>"
  And I wait for 1 seconds
  When I enter description "<description_post>"
  And I wait for 2 seconds
  When I click button publish
  And I wait for 1 seconds
  When I confirm
  And I wait for 5 seconds
  Then I click back page
  And I wait for 3 seconds
  When I open edition
  And I wait for 1 seconds
  Then I edit titulo "<new_title_post>"
  And I wait for 1 seconds
  When I update
  And I wait for 1 seconds
  When I confirm
  And I wait for 2 seconds
  Then I click back page
  And I wait for 5 seconds