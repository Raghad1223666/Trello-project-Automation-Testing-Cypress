Feature: Update list name

    Scenario: Verify that the user can update the list name correctly
        Given Go to the Board
        When Click on the List name
        And Type the new name
        Then The List name is updated correctly
