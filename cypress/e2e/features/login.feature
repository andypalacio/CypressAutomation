Feature: Validate that a user can log in to the app 

Scenario: login as an admin
    Given I navigate to "/home"
    When I enter "andresepalacio+demo@gmail.com" as user and "123123" as password the login side
    And I click on the "Login" button on the login side
    Then I am successfully logged in

Scenario Outline: try to login with invalid data
    Given I navigate to "/home"
    When I enter <email> as user and <pass> as password the login side
    And I click on the "Login" button on the login side
    Then The error message <message> is displayed
Examples:
| Case                 | email                            | pass     | message                                       |
| email doesn't exists | 'test@gmail.com'                 | '123123' | 'There is no user registered with that email' |
| Invalid Password     | 'andresepalacio+demo@gmail.com'  | '333333' | 'Wrong password'                              |
| Empty email          | ''                               | '123123' | 'Please enter Email and Password'             |
| Empty password       | 'andresepalacio+demo@gmail.com'  | ''       | 'Please enter Email and Password'             |