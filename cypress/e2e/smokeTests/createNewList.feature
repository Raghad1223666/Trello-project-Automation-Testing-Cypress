Feature: Create a new list functionality

    Scenario: Verify that the user can create a new list successfully
        Given Go to the Board
        When Click on the Add another list
        And Enter list title
        And Click on the Add list button
        Then The list Added successfully