Feature: Members

  @user1 @web
  Scenario: Como usuario de ghost creo un nuevo miembro
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
