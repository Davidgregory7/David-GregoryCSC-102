// single line comment
/* multi line comment */

// 
function playcraps(){
    // we are going to narrate what the function does through the console
    console.log("playCraps function was called")

//  roll a die
var die1 = rollDie();
console.log("The first die roll is:" +die1 );

//  roll a second die
var die2 = rollDie();
console.log("The second die roll is:" +die2 );

// add the rolls together
var sum= die1 + die2;
console.log("The sum of the dice rolls is " + sum);

// output the dice rolls to the html page
document.getElementById("die1Result").innerHTML = "Die 1 is: " + die1;
document.getElementById("die2Result").innerHTML = "Die 2 is: " + die2;
document.getElementById("sumResult").innerHTML = "The sume is: " + sum;

//  Let's code the rules of the dice game
// if the sum is 7 or the sum is 11, we lost
// || mean or
// == checks if the values are the same
if (sum == 7|| sum == 11){
    document.getElementById("crapsResult").innerHTML = "You lose ";
}
// now let's check if we win by rolling 2 even numbers that match
// first we check if the dice are the same numbers
// then we check the modulus (remainder) is 0 when the die roll is divided by 2
// or in other words, was the die roll an even number
else if(die1 == die2 && die1 % 2 == 0){
    document.getElementById("crapsResult").innerHTML = "You win ";
}
// if neither of the previous if or else if statements were true, then this catch-all
// else statement will be executed
else{
    document.getElementById("crapsResult").innerHTML = "You pushed (you tied)!";
}
}

//  create a function that generates a die roll - a random number between 1 and 6
function rollDie(){
// generate a random number
// Math.random gives us a number betwenn 0 and 1
    var die = Math.random() * 6;
// we will get a rounded whole number that will be returned to whatever code calls this function
    return Math.ceil( die );
}

 // this function will validate the form input make sure it meets our criteria
 function validateloginForm(){
    // get the first name that user entered on the form
    var firstname = document.getElementById("fname").value;
    
    // get the last name that user entered on the form
    var lastname = document.getElementById("lname").value;
    
    // get the zip code that the user entered on the form
    var zipCode = document.getElementById("zip").value;
    
    console.log("First Name: " + firstname);
    console.log("Last Name: " + lastname);
    console.log("Zip Code: " + zipCode);
    // create a variable to hold firstName + space + lastName
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);
    
    // do the input validation
    // we will check for more than 20 letters in the first and last names
    // or if no names were entered, the length will be 1 because of the space we add between first and last name
    if(fullName.length > 20 || fullName.length == 1){
        console.log("Invalid name");
    // let the user know that they did not enter the information in correctly
        alert("Please enter a name that is shorter than 20 letters");
    // make sure the form does not submit
    return false;
    }
    else if (zipCode.length != 5){
    console.log("Invalid zip code");
    // let the user know that the zip code was not entered correctly
    alert("Zip code was not 5 digits. Please try again.");
    // make sure the form does not submit
    return false;
    }
    else{
        // they passed validation! Release the secret word!
        consoole.log("We are good to go.");
    alert("Welcome, " + fullName + ". The secret word is validation.");
        return true;
    }
    
    }
    

//    Week 12 Lap time recorder
 // this variable will keep track of the current lap
        // as we add laps, the value will be increased by 1
        var lapCounter = 0;
     
    //  set up an empty array that will hold the lap times
    var lapsArray = [];
     
    //  this function will record a lap - add a lap to the lapsArray each time the button is clicked
     function recordLap(){
    // use .push to add an item to the end of the array
    // new Date() will add the current date and time to the array
    lapsArray.push(new Date());

// print out the info to the console
console.log("Lap " + (lapCounter+1) + "recorded" + lapsArray[lapCounter]);

// display a message to the user that the lap was recorded
// create the shortcut/nickname variable that points to the message div
var divMsg = document.getElementById("messageDiv")

// display a message based on which lap is being recorded
if (lapCounter == 0){

    divMsg.innerText = "The first lap was recorded";
}
else if (lapCounter ==1){
    divMsg.innerText = "The second lap was recorded";
}
else if (lapCounter == 2){
    divMsg.innerText = "The third lap was recorded"
}
// catch all else statement - if the counter is greater than 2, print out a generic message
else{
    divMsg.innerText = "Lap " + (lapCounter+1) + "was recorded.";
}
// increase the lap counter by 1 - it is equivalent to saying lapCounter = lapCounter + 1
lapCounter++;
}

// create the function to display the lap times to the user
      function displayLaps(){
        // create a variable that is a pointer to the display laps div
      var divLaps = document.getElementById("lapsDiv");
    
    //    create an unordered list to hold the lap times
    var u1Laps = document.createElement("u1");

// add the unordered list to the display laps div
divLaps.appendChild(u1Laps);

// loop through the laps array to add the lap times to the unordered list
for (var i = 0; i < lapsArray.length; i++){
    // create a list item that will be added to the unordered list
var liaLap = document.createElement("li")

//    add the lap time to the list item text
liaLap.textContent = "Lap: " + (i+1) + ": " + lapsArray[i];

// add the listitem to the unordered list
u1Laps.appendChild(liaLap);
}
}