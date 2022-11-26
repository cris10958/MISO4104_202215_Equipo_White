Feature: Newsletter

  @user1 @web
  Scenario: Como usuario de ghost creo newsletter con nombre de 10 y descripción de 4000 caracteres
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    And I click Settings option
    And I click Email newsletter
    And I click Add newsletter
    And I enter "10" random characters on newsletter name
    And I enter "4000" random characters on newsletter description
    Then I click Create newsletter
    And I wait for 2 seconds
