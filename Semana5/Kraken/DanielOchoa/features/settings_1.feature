Feature: Tags

  @user1 @web
  Scenario: Como usuario de ghost configuro tema dark
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 4 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 4 seconds
    Then I toggle theme
    And I wait for 4 seconds
