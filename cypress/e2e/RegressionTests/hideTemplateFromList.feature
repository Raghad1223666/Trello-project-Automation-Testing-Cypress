Feature: Hide Template From List

    Scenario: Verify that the user can hide template from list successfully
        Given The user navigate to the board
        When Click on the Template card
        And Click on the Hide from list button
        And Close Template popup
        Then The Template is hidden from the list successfully
