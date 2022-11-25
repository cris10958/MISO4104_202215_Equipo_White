Feature: Members

  @user1 @web
  Scenario: Ingresa a cada menu
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    And I click Posts - Drafts option
    And I wait for 2 seconds
    And I click Posts - Scheduled option
    And I wait for 2 seconds
    And I click Posts - Published option
    And I wait for 2 seconds
    And I click Pages option
    And I wait for 2 seconds
    And I click Tags option
    And I wait for 2 seconds
    And I click Members option
    And I wait for 2 seconds
