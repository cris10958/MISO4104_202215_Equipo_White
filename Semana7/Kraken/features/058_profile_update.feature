Feature: profile update

  @user1 @web
  Scenario: Como usuario de ghost quiero actualizar la contrasena del perfil usando la contrasena actual y una nueva contrasena segura
    Given I navigate to page "<URL_GHOST>"
    And I wait for 1 seconds
    And I enter random email "<EMAIL>"
    And I enter random password "<PASSWORD>"
    And I wait for 1 seconds
    And I click Sign in
    And I click user menu
    And I click user profile
    And I wait for 1 seconds
    And I fill old password with original "<PASSWORD>"
    And I wait for 1 seconds
    And I fill new password with "1q2w3e4r5t6" string
    And I wait for 1 seconds
    And I fill verify password with "1q2w3e4r5t6" string
    And I wait for 1 seconds
    And I click change password button
    And I wait for 1 seconds
    Then I see password update success "Password updated"
    And I restore original password "<PASSWORD>"
    And I wait for 1 seconds
    Then I click change password button


