Feature: Create a new card functionality

    The user should be able to create new card

    Scenario: Verify that the user can create a new card successfully
        Given The user navigate to the board
        When Click on the Add a card
        And Enter a title for this card to add new card
        And Click on the add card button
        Then The Card is created successfully

