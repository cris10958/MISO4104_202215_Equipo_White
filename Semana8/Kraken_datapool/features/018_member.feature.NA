Feature: Members

  @user1 @web
  Scenario: Como usuario de ghost busco un member existente
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    And I click Members option
    And I click New member button
    And I enter random name member "$name"
    And I enter random email member "$email_1"
    And I save member
    And I wait for 2 seconds
    And I click Members option
    And I click Filter    
    Then I filter Email is "$$email_1"
    And I wait for 2 seconds
    And I apply Filter
    And I wait for 2 seconds
    And I check "1" rows member table
