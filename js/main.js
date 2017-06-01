/* This is setting the player's choice to call a prompt that will save it to a variable/string
then sets a variable for computerChoice that will use a RNG that will generate a number then sets number ranges to equal
a string which will be the answer for the computer
*/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

/* Creates a function called compare()
This will make it so there will be two parameters to compare.
Then it calls the function and instead of using choice1 & choice 2, it uses the previous variables
*/

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
        }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
            }
        else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
            }
            else {
                return "scissors wins";
            }
        }
    }
};
    
document.getElementById("result").innerHTML = compare(userChoice, computerChoice);

// When userChoice = rock & computerChoice = paper, get undefined error
// When userChoice = paper & computerChoice = scissors, get undefined error
// Same with scissors and rock