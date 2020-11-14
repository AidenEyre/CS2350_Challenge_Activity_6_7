# CS2350_Challenge_Activity_6_7

6-7: Challenge: Handling Events on Form Elements

********************** Instructions **********************

You will create and link a .js file to add the JavaScript functionality for this activity.

Add an Event Handler for the window load event and functions that "listen" for the following events occurring on the form (Note:  You can see these requirements in action under the "expected results" section below).

Changes to the Kennel Size dropdown box
    -There is an input element that gathers the weight of the pet. Then it displays the size of the kennel in the adjacent text box.
    -Define a variable for size
        -Use an if/else if statement or a case statement to set the value of size
            -if weight is NaN, set size to the empty string ("")
            -if weight is less than or equal to 4, set size to "mini"
            -if weight is greater than 4 but less than or equal to 12, set size to "small"
            -if weight is greater than 12 but less than or equal to 50, set size to "medium"
            -if weight is greater than 50, set size to "large"
        -Display the text value of the size variable in the size element
Changes to the Days of Boarding text box
    -There is an input element that gathers the number of days for boarding. Then it displays the cost of the boarding in the adjacent text box.
    -Gather the value of the days input element
    -If the value of days is NaN
        -set the days input to 0
        -set the boardingFee input to 0.00
    -If the value of days is a number
        -set the days input to the integer returned from the parseInt function
        -set the boardingFee to 19.99 times the number of days
        -specify this value only has two digits after the decimal place
Add a Function that Updates the Total Costs
    -At the bottom of the page is a section that displays the total costs including boarding, registration, and total. Write a function that updates -these values when called.
            -Define a variable for registration cost with an inital value of zero
            -Define a variable for the number of events with an initial value of zero
            -Define a variable for boarding cost
                -get the value from the boardingFee input
                -if the value is the empty string ("")  
                    -set the boarding cost to 0 (the number zero as it will be used in an addition problem later)
                    -otherwise, turn it into a number (be sure to save the result back in the variable for later use)
        -If the sing checkbox is checked *check below for an example
            -add one to the number of events
        -If the cute checkbox is checked
            -add one to the number of events
        -If the trick checkbox is checked
            -add one to the number of events
        -Compute the registration cost
            -it is 120 * the number of events
        -Compute the total
            -it is the boarding cost + registration cost
        -Display the boarding cost in the boardingCost element
            -specify this value only has two digits after the decimal place
        -Display the registration cost in the registrationCost element
            -specify this value only has two digits after the decimal place
        -Display the total in the totalCost element
            -specify this value only has two digits after the decimal place
    -Now go back to the days of boarding event handler
        -add a call to this update total cost function
        -test it to make sure the totals update as expected
Add Event Handlers for the Checkboxes
    -There are three checkboxes. Each is followed by a div containing a fieldset, labels, and input elements. This div is to only be shown when the associated checkbox is checked.
In the .css file
    -Add a style block for these three divs
    -Set the display property to none
Add an event handler to the sing checkbox
    -Have it respond to the change event
    -If the checkbox is checked
        -set the display to block
    -If the checkbox is not checked (can just use else)
        -set the display to none
    -add a call to the update total cost function
    -test it to make sure the totals update as expected
Add another event listener like the one above for the cute checkbox.
Add another event listener like the one above for the trick checkbox.