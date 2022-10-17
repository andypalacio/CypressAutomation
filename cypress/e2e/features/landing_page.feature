Feature: validate the Landing page
    
Scenario: access the Landing Page
    When I navigate to "https://getlobee.com/"
    Then the page is loaded showing the text "Happier Guests"
    And the page is loaded showing the text "Promote your Events with our board"
    And the page is loaded showing the text "Keep your guests connected"
    And the page is loaded showing the text "Coming up!"

Scenario: Sign in from Tittle button
    Given I navigate to "https://getlobee.com/"
    When I click on the "Sign in" button on the home
    And I am redirected to "https://admin.getlobee.com/"
    And the focus is on the "Email" field 

Scenario: Sign in from bottom button
    Given I navigate to "https://getlobee.com/"
    When I click on the "Try it out! It's free!" button
    And I am redirected to "https://admin.getlobee.com/"
    And the focus is on the "Email" field 

Scenario: Sign in from top bar button
   Given I navigate to "https://getlobee.com/"
   When I click on the "Sign in" button on the header
   And I am redirected to "https://admin.getlobee.com/"
   And the focus is on the "Email" field 

Scenario: log in from top bar button
   Given I navigate to "https://getlobee.com/"
   When I click on the "Login" secondary button
   And I am redirected to "https://admin.getlobee.com/"
   And the focus is on the "Email" field 