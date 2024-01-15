Feature: Create a new card functionality

    The user should be able to create new card

    Scenario: Verify that the user can create a new card successfully
        Given Go to the Board
        When Click on the Add a card
        And Enter a title for this card to add new card
        And Click on the add card button
        Then The Card is Visible and created
        When Open the created card
        Then The card was opened successfully and contains the expected text which means the card was created successfully

