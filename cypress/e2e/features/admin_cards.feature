Feature: Validate the Cards Page on the admin

Scenario: Successfully create an info Card
    Given I am logged in to the app
    And I click on the "Cards" header item
    When I click on the Add New button of the cards collumn "Info cards"
    And I enter "Info Card" on the "Name" field of the card modal
    And I enter "this is an info Card" on the "Description" field of the card modal
    And I click on the Save buton of the card modal
    Then the card "Info Card" is displayed on the "Info cards" column

Scenario: Successfully create an discount Card
    Given I am logged in to the app
    And I click on the "Cards" header item
    When I click on the Add New button of the cards collumn "Discount cards"
    And I enter "Discount Card" on the "Name" field of the card modal
    And I enter "this is an Discount Card" on the "Description" field of the card modal
    And I click on the Save buton of the card modal
    Then the card "Discount Card" is displayed on the "Discount cards" column


Scenario: Successfully create an Event Card - Not full day
    Given I am logged in to the app
    And I click on the "Cards" header item
    When I click on the Add New button of the cards collumn Event cards
    And I enter "Event Card" on the "Name" field of the card modal
    And I enter "this is an Event Card" on the "Description" field of the card modal
    And I enter a date as "Start" day
    And I enter a date as "End" day
    And I click on the Save buton of the card modal
    Then the card "Event Card" is displayed on the Event cards column

