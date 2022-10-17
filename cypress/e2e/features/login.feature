Feature: title
    In order to value
    As a role
    I want feature

Scenario: login as an admin
    Given I navigate to "https://admin.getlobee.com/"
    When I enter "andresepalacio+admin@gmail.com" on the "Email" field on the login side
    And I enter "123123" on the "Password" field on the login side
    And I click on the "Login" button on the login side
    Then I am successfully logged in


Scenario Outline: try to login with invalid data
    Given I navigate to "https://admin.getlobee.com/"
    When I enter <email> on the "Email" field on the login side
    And I enter <pass> on the "Password" field on the login side
    And I click on the "Login" button on the login side
    Then The error message <message> is displayed
Examples:
| Case                 | email                            | pass     | message                                 |
| email doesn't exists | "test@gmail.com"                 | "123123" | "Wrong credentials. Please, try again." |
| Invalid Password     | "andresepalacio+admin@gmail.com" | "333333" | "Wrong credentials. Please, try again." |
| Empty email          | ""                               | "123123" | "Please enter Email and Password"       |
| Empty password       | "andresepalacio+admin@gmail.com" | ""       | "Please enter Email and Password"       |
#| Invalid email        | "test"                           | "123123" | "" |


