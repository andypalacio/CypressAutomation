Feature: Validate the Cards Page on the admin

Scenario: Successfully create an info Card
    Given I am logged in to the app
    And I click on the "Cards" header item
    When I click o the Add New button of the cards collumn "1"
#    And I enter "" on the "Name" field of the card modal
#    And I enter "" on the "Description" field of the card modal
#    #add a step to upload an image
#    And I click on the Save buton of the card modal
#    Then the card "" is displayed on the "Info Cards" column

#Scenario: Successfully create an discount Card
#    Given I am logged in to the app
#    When I click o the "Add New" button of the "Info Cards" collumn
#    And I enter "" on the "Name" field of the card modal
#    And I enter "" on the "Description" field of the card modal
#    #add a step to upload an image
#    And I click on the Save buton of the card modal
#    Then the card "" is displayed on the "Info Cards" column
#
#Scenario: Successfully create an Event Card
#    Given I am logged in to the app
#    When I click o the "Add New" button of the "Info Cards" collumn
#    And I enter "" on the "Name" field of the card modal
#    And I enter "" on the "Description" field of the card modal
#    #add a step to upload an image
#    And I click on the Save buton of the card modal
#    Then the card "" is displayed on the "Info Cards" column
