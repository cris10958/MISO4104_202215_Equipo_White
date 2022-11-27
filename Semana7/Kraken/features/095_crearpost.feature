Feature: Create Post with Datapool A-priori 
    @user1 @web
    Scenario: Como usuario quiero crear un post en la plataforma
    Given I navigate to page "<URL_GHOST>"
    And I wait for 2 seconds
    And I enter email "<EMAIL>"
    And I enter password "<PASSWORD>"
    And I click Sign in
    And I wait for 2 seconds
    When I open post
    And I wait for 1 seconds
    When I click new post
    And I wait for 1 seconds
    When I enter description post "Sed officiis voluptas tempora reprehenderit accusamus molestiae voluptatem iste velit. Perspiciatis aspernatur qui tenetur. Iusto odit necessitatibus."
    And I wait for 2 seconds
    When I click Publish
    And I wait for 2 seconds
    When I click Continue final review
    And I wait for 1 seconds
    When I click publish post right now
    And I wait for 3 seconds
    When I click back editor
    And I wait for 1 seconds
    Then I click back post
    And I wait for 5 seconds