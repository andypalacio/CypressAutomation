Feature: Validate the More Option header tab

Scenario: Access the Hostel Profile
    Given I am logged in to the app
    When I click on the more options header item
    And I click on the "Settings" option
    Then I am redirected to "/settings"

Scenario: Edit the Hostel Name
    Given I am logged in to the app
    When I click on the more options header item
    And I click on the "Settings" option
    And I enter "Hostel Test" on the "Hostel name" field
    And I click on the "Save" button
    Then the value "Hostel Test", on the field "Hostel name" is saved

Scenario: Successfuly log out from the app
    Given I am logged in to the app
    When I click on the more options header item
    And I click on the "Log out" option
    Then logged out from the app







    