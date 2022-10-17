Feature: Validate that a user can sign in to the app

Scenario: Successfully sign in to the app
    Given I navigate to "https://admin.getlobee.com/"
    When I enter "Automated Test Hostel" on the "Hostel Name" field on the Sign in side
    When I enter "andresepalacio+atc@gmail.com" on the "Email" field on the Sign in side
    And I enter "123123" on the "Password" field on the Sign in side
    And I enter "123123" on the "Repeat password" field on the Sign in side
    And I click on the "Create Account" button


Scenario Outline: Error trying to Sign in with invalid Data
    Given I navigate to "https://admin.getlobee.com/"
    When I enter <hostelName> on the "Hostel name" field on the Sign in side
    And I enter <email> on the "Email" field on the Sign in side
    And I enter <pass> on the "Password" field on the Sign in side
    And I enter <reppass> on the "Repeat password" field on the Sign in side
    And I click on the "Create Account" button on the Sign in side
    Then The error message <message> is displayed
Examples:
| Case                    | hostelName    | email                            | pass     | reppass   | message                                                                                                                  |
| empty Hostel Name       | ""            | "andresepalacio+atc1@gmail.com"  | "123123" | "123123"  | "Please enter the Hostel Name"                                                                                           |
| Empty email             | "ATC Hostel"  | ""                               | "123123" | "123123"  | "Please enter the Admin Email"                                                                                           |
| Empty pass              | "ATC Hostel"  | "andresepalacio+atc1@gmail.com"  | ""       | "123123"  | "Please enter the Password"                                                                                              |
| Empty Repeated pass     | "ATC Hostel"  | "andresepalacio+atc1@gmail.com"  | "123123 "| ""        | "Please enter the Password"                                                                                              |
| passwords doesn't match | "ATC Hostel"  | "andresepalacio+atc1@gmail.com"  | "123123" | "321321"  | "Passwords should be the same"                                                                                           |
| Duplicated Email        | "ATC Hostel"  | "andresepalacio+admin@gmail.com" | "123123" | "123123"  | "This email was already registerd. Please log-in, or get in contact with us by sending an email to contact@getlobee.com" |
#| invalid format Email   | "ATC Hostel"  | "andresepalacio+atc1"            | "123123" | "123123"  |                                                                                                                         |

Scenario: Check Terms of Use link
    Given I navigate to "https://admin.getlobee.com/"
    When I click on the "Terms of Use" link
    Then The page "https://getlobee.com/terms-of-use" is open

Scenario: Check Privacy Policy
    Given I navigate to "https://admin.getlobee.com/"
    When I click on the "Privacy Policy" link
    Then The page "https://getlobee.com/privacy-policy" is open



    