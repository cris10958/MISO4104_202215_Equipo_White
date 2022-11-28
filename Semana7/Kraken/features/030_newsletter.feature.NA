Feature: Newsletter

  @user1 @web
  Scenario: Como usuario de ghost edito un newsletter con nombre de 192 caracteres
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    And I click Settings option
    And I click Email newsletter
    And I click Add newsletter
    And I enter random name newsletter "$name_1"
    And I click Create newsletter
    And I find "$$name_1" newsletter
    Then I enter "192" random characters on edit newsletter name
    And I click Save and close newsletter
    And I find edit name newsletter error "Cannot be longer than 191 characters."
