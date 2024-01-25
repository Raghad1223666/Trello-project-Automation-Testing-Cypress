Feature: Delete Existing card functionality
    Scenario: Verify that the user can delete exisiting card successfully
        Given The user navigate to the board
        When Open the existing card
        And Click on the Archive Button
        And Click on the Delete Button
        And Click on the Delete Button from confirmation popup
        Then The card deleted successfully