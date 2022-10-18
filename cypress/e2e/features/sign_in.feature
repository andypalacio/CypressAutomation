Feature: Validate that a user can sign in to the app

# This scenario will remain commented until we have access to delete the just created account
# Scenario: Successfully sign in to the app
#     Given I navigate to "/home"
#     When I enter "Automated Test Hostel" on the "Hostel name" field on the Sign in section
#     And I enter "andresepalacio+atc@gmail.com" on the "Email" field on the Sign in section
#     And I enter "123123" on the "Password" field on the Sign in section
#     And I enter "123123" on the "Repeat password" field on the Sign in section
#     And I click on the "Create Account" button
#     Then The account "Automated Test Hostel" is created

Scenario Outline: Error trying to Sign in with invalid Data
    Given I navigate to "/home"
    When I enter <hostelName> on the "Hostel name" field on the Sign in section
    And I enter <email> on the "Email" field on the Sign in section
    And I enter <pass> on the "Password" field on the Sign in section
    And I enter <reppass> on the "Repeat password" field on the Sign in section
    And I click on the "Create Account" button
    Then The error message <message> is displayed
Examples:
| Case                    | hostelName    | email                            | pass     | reppass   | message                                                                                                                  |
| empty Hostel Name       | ""            | "andresepalacio+atc1@gmail.com"  | "123123" | "123123"  | "Please enter the Hostel Name"                                                                                           |
| Empty email             | "ATC Hostel"  | ""                               | "123123" | "123123"  | "Please enter the Admin Email"                                                                                           |
| Empty pass              | "ATC Hostel"  | "andresepalacio+atc1@gmail.com"  | ""       | "123123"  | "Please enter the Password"                                                                                              |
| Empty Repeated pass     | "ATC Hostel"  | "andresepalacio+atc1@gmail.com"  | "123123 "| ""        | "Please enter the Password"                                                                                              |
| passwords doesn't match | "ATC Hostel"  | "andresepalacio+atc1@gmail.com"  | "123123" | "321321"  | "Passwords should be the same"                                                                                           |
| Duplicated Email        | "ATC Hostel"  | "andresepalacio+demo@gmail.com" | "123123" | "123123"  | "This email was already registerd. Please log-in, or get in contact with us by sending an email to contact@getlobee.com"  |

Scenario: Check Terms of Use link
    Given I navigate to "/home"
    When I click on the "terms-of-use" link
    Then The page "/terms-of-use" is displayed with the title "Terms and Conditions"

Scenario: Check Privacy Policy
    Given I navigate to "/home"
    When I click on the "privacy-policy" link
    Then The page "/privacy-policy" is displayed with the title "Privacy Policy"



    