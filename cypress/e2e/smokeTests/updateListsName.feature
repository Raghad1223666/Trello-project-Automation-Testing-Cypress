Feature: Update lists name

    Scenario: Verify that the user can update the lists name correctly
        Given The user navigate to the board
        When Click on the lists name and Type the new name
        Then The Lists name is updated correctly
