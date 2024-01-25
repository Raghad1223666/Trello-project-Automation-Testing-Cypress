Feature: Create a new template functionality
    Scenario: Verify that the use can create a new template successfully
        Given The user navigate to the board
        When Click on the create a template icon
        And Click on the Create a new template button
        And Type Template title
        And Click on the Add Button
        Then The Template created successfully