Feature: Move Template to any list

    Scenario: Verify that the user can Move Template to any list successfully
        Given The user navigate to the board
        When Click on the Template
        When Click on the Move Label
        When Click on the List Label
        When Select the destination List
        When Click on the Move Button
        When Close the Template popup
        Then The Template is Moved to new list successfully
