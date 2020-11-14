"use strict";

/*

   6-7: Challenge: Handling Events on Form Elements
   
   Author: Aiden Eyre
   Date:   13 November 2020
   
   Filename: index.js
   
   Function List
   =============
   
       formatNumber() - This function just adds two decimal places to inputted variables.

    checkKennelSize() - This function reads the input in the "Weight of pet?" box and adjusts
                        the display in the "Kennel size" box accordingly.

       daysBoarding() - This function reads the input in the "Days of boarding?" box and adjusts
                        the display in the "Cost" box, next to it, accordingly.

          totalCost() - This function calculates the values for the "Boarding", "Registration", and
                        "Total" boxes with the calculated prices.

        makeVisible() - This function takes in an id string and an index. With these variables it will
                        make the divs in the "Wich Competitions?" section change from visible to not
                        visible.
*/

// Create a global style node and add it do the document head
let style = document.createElement("style");
document.head.appendChild(style);

// When the page loads run these functions
window.addEventListener("load", () => {
  // Set the divs in the checkbox class to display none
  style.sheet.insertRule("#singAdd{display:none}", 0);
  style.sheet.insertRule("#cuteAdd{display:none}", 1);
  style.sheet.insertRule("#trickAdd{display:none}", 2);
  daysBoarding(); // Run this function on page load

  // Run these elements everytime input changes
  document.getElementById("weight").oninput = checkKennelSize;
  document.getElementById("days").oninput = daysBoarding;
  // Use an arrow function to call two different functions in the onchange event
  document.getElementById("sing").onchange = () => {
    makeVisible("#sing", 0);
    totalCost();
  };
  document.getElementById("cute").onchange = () => {
    makeVisible("#cute", 1);
    totalCost();
  };
  document.getElementById("trick").onchange = () => {
    makeVisible("#trick", 2);
    totalCost();
  };
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
  if (document.querySelector("#sing:checked")) {
    eventNum++;
  }

  if (document.querySelector("#cute:checked")) {
    eventNum++;
  }

  if (document.querySelector("#trick:checked")) {
    eventNum++;
  }

  // Calculate registraction cost
  registerCost = eventNum * 120;

  // Update each input value
  document.getElementById("boardingCost").value = formatNumber(boardingCost);
  document.getElementById("registrationCost").value = formatNumber(
    registerCost
  );
  document.getElementById("totalCost").value = formatNumber(
    parseFloat(registerCost) + parseFloat(boardingCost)
  );
}

// Changes the checkbox divs display from block to none
function makeVisible(id, index) {
  if (document.querySelector(id + ":checked")) {
    style.sheet.cssRules[index].style.display = "block";
  } else {
    style.sheet.cssRules[index].style.display = "none";
  }
}
