Feature: Hide Template From List

    Scenario: Verify that the user can hide template from list successfully
        Given Go to the Board
        When Click on the Template card
        And Click on the Hide from list button
        And Close Template popup
        Then The Template is hidden from the list successfully
