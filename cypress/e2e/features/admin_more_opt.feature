Feature: Validate the More Option header tab

Scenario: Access the Hostel Profile
    Given I am logged in to the app
    When I click on the "..." header item
    And I click on the "Profile" option
    Then I am redirected to "https://admin.getlobee.com/profile"

Scenario: Edit the Hostel Name
    Given I am logged in to the app
    When I click on the "..." header item
    And I click on the "Profile" option
    And I enter "Hostel Test" on the "Hostel name" field
    And I click on the "Save" button
    Then I am redirected to "https://admin.getlobee.com/profile"

Scenario: Successfuly log out from the app
    Given I am logged in to the app
    When I click on the "..." header item
    And I click on the "Log out" option
    Then logged out from the app







    