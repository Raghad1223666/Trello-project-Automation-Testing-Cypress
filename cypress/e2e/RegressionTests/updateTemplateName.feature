Feature: Update Template name

    Scenario: Verify that the user can update the Template name correctly
        Given The user navigate to the board
        When Click on the Template card
        And Type the new name from Template popup
        And Close Template popup
        Then The Template name is updated correctly
