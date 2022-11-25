Feature: Members

  @user1 @web
  Scenario: Como usuario de ghost edito la nota de un member
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
    And I find a member "$$email_1"
    Then I enter "20" random characters on notes member
    And I save member
    And I wait for 2 seconds
    And I click Members option
    And I find a member "$$email_1"
