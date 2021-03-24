## Making a plan


1. Structure html

    -header
    -intro
    -three articles
        -headings
        -lists
    -section with quiz with button and quiz result
    -image

2. Add styling
    -Fonts
    -Positioning
    -Color

3. Javascript: Outcomes and validation steps
    - There is a button that the user can click
        - The quiz does not run until this button is clicked.  
        - To do this use a button.eventListener('click', () => {})
    - The user clicks the button and 
        1. An alert is activated that asks if they want to take the test
        2. If no, return message and exit popups.  If okay, a prompt is shown that asks for their name. 
            - I want to use the name later.  To do this I need to set the user input to a variable. A variable stores data for later. 
        3. After name is filled in and okay is pushed, first question comes up as a prompt.
        4. The user inputs something, hopefully similar to 'yes' or 'no'.
                - create a function that transforms all inputs that start with 'y' to be a "true" boolean value. 
            -I need to tell the program which answers should be yes and should be no
                - Create if statements that correlate with each question.  If answer should be "yes" and user inputs something that starts with "y", or if answer should be "no" and user inputs anything other than a word starting with "y", add a point to their score. 
            -  I need to store their answer as a number value representing a 'point'.  I have to increment that value based on passing inputs.
                - set score as a variable and start it at 0
                - use ++
    - After all three questions are asked I need to access the total 'points' value and display this to the user.
        - Grab the results div from the dom, use results.textContent = score to transfer score into the div.


   

***TDD countsAsAYes function
    - countsAsAYes 
        -takes in user input
        -returns a boolean based on user input
        -i.e. countsAsAYes('yep') should return "true"
        -i.e. countsAsAYes('nah') should return "false"

