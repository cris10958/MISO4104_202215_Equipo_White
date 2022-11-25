Feature: Members

  @user1 @web
  Scenario: Como usuario de ghost filtro un member por nombre de 16000 caracteres
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    And I click Members option
    And I click Filter
    And I wait for 2 seconds
    And I set the filter "Name" "is" and set random string of "16000" length
    And I wait for 2 seconds
    And I apply Filter
