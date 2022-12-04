Feature: F005 - Despublicar un post

@user1 @web
Scenario: Como administrador de la aplicación Ghost realizo el login, la creación y despublicación de un post
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  When I enter password "<PASSWORD>"
  Then I click login
  And I wait for 2 seconds
  When I open post
  When I click button new
  When I enter titulo "<title_new_post>"
  When I enter description "<description_post>"
  When I click button publish
  When I confirm
  Then I click back page
  When I open edition
  When I update
  When I unpublish
  When I confirm
  Then I click back page