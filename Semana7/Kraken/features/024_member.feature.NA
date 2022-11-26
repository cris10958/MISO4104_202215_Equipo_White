Feature: Members

  @user1 @web
  Scenario: Como usuario de ghost filtro un member por email y nombre nombre cada uno con 8000 caracteres
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    And I click Members option
    And I click Filter
    And I wait for 2 seconds
    And I set the filter "Email" "is" and set random string of "8000" length
    And I wait for 2 seconds
    And I add a second filter Name is with a random string of "8000" length
    And I apply Filter
