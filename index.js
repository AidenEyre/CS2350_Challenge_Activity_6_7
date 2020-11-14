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
    // Run this element everytime input changes
    document.getElementById("weight").oninput = checkKennelSize;
});

// Function handles the pet weight and kennel size inputs
function checkKennelSize() {
    // Initialize petWeight and kennelSize nodes
    var petWeight = document.getElementById("weight").value;
    var kennelSize = document.getElementById("size");

    // Run through a series of if statements to display a value in kennelSize
    if(petWeight === NaN) {
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