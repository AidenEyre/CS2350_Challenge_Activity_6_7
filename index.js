"use strict";

/*

   6-7: Challenge: Handling Events on Form Elements
   
   Author: Aiden Eyre
   Date:   13 November 2020
   
   Filename: index.js
   
   Function List
   =============
   
   add functions here
   
*/

// When the page loads run these functions
window.addEventListener("load", () => {
    // Run this function on page load
    divStyles();
    daysBoarding();

    // Run these elements everytime input changes
    document.getElementById("weight").oninput = checkKennelSize;
    document.getElementById("days").oninput = daysBoarding;
    document.getElementById("sing").onchange = totalCost;
    document.getElementById("cute").onchange = totalCost;
    document.getElementById("trick").onchange = totalCost;
});

// Adds two decimal places after inputted letiables
function formatNumber(val) {
    // Call toLocaleString and have it give the number two decimal places
    return val.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

// Handles the pet weight and kennel size inputs
function checkKennelSize() {
    // Initialize petWeight and kennelSize nodes
    let petWeight = document.getElementById("weight").value;
    let kennelSize = document.getElementById("size");

    // Run through a series of if statements to display a value in kennelSize
    if (petWeight === NaN) {
        kennelSize.value = "";
    } else if (petWeight <= 4) {
        kennelSize.value = "mini";
    } else if (petWeight > 4 && petWeight <= 12) {
        kennelSize.value = "small";
    } else if (petWeight > 12 && petWeight <= 50) {
        kennelSize.value = "medium";
    } else if (petWeight > 50) {
        kennelSize.value = "large";
    }
}

// Handles the days boarding and boardingFee inputs
function daysBoarding() {
    // Initialize days and boardingFee nodes
    let days = document.getElementById("days").value;
    let boardingFee = document.getElementById("boardingFee");

    // If there is not input set days value to 0
    if (days === "") {
        days = "0";
    }

    // Calculate the value by converting the days value to an int and
    // multiplying by 19.99. Then finally calling the formatNumber()
    // function
    boardingFee.value = formatNumber(parseFloat(days) * 19.99);

    // Call totalCost() to update
    totalCost();
}


// Updates all the total costs at the bottom of the form
function totalCost() {
    // Initialize a few variables
    let registerCost = 0;
    let eventNum = 0;
    let boardingCost = document.getElementById("boardingFee").value;

    // If ID: sing, cute, or trick is checked ad ome to eventNum
    if (document.getElementById("sing").checked) {
        eventNum++;
    }
    
    if (document.getElementById("cute").checked) {
        eventNum++;
    }
    
    if (document.getElementById("trick").checked) {
        eventNum++;
    }

    // Calculate registraction cost
    registerCost = eventNum*120;

    // Update each input value
    document.getElementById("boardingCost").value = formatNumber(boardingCost);
    document.getElementById("registrationCost").value = formatNumber(registerCost);
    document.getElementById("totalCost").value = formatNumber(parseFloat(registerCost) + parseFloat(boardingCost));
}

// Sets the div display for each competition option to none
function divStyles() {
    // Create a style node
    let style = document.createElement("style");

    // Append the node to the html head
    document.head.appendChild(style);

    // Add style rules to the node
    style.sheet.insertRule((".checkbox div{display: none;}"), 0);
}
