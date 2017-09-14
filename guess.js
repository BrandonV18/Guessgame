
function getRandomInt(min, max) {  // defining a function  that returns a number between min and max // 
  min = Math.ceil(min); // minninum number //
  max = Math.floor(max); // maximum number // 
  return Math.floor(Math.random() * (max - min)) + min; // returns function // 
}

function playGame(player) {
    var Turns = 0; // set counter for turns at 0 //
    var Correct = 0;  // set correct to 0 // 
    var Answer = getRandomInt(1,100); // number you enter to guess // 
    do { //beginning of the while loop // 
        var Guess = prompt("Guess the integer between 1 and 100!");   // Displays rules of game //
        Turns++;
        if (isNaN(Guess) !== true) {
            if (Guess == Answer) { // displays answer is correct // 
                alert("CORRECT! You guessed it in "+Turns+" turns."); // Displays amount of guesses you took //
                Correct = 1; // ends the while loop // 
            }
            else if (Guess > Answer) {    // is guess greater than the answer // 
                alert("Hint: Try a lower number!"); 
            }
            else {
                alert("Hint: Try a higher number!"); // if guess is lower than the answer // 
            }
        }
        else {
            alert("Quitter!"); // If you enter something other than number displays you quit //
            player.losses ++;
        }
    }
    while (Correct == 0); // keep looping until answer is correct // 
}

 // this function declares option to play again by entering y or n //
 
function start() {
    var playAgain = 'y';  // letter to enter when you want to play again // 
    do { // define beginning of while loop //
        playGame();
        playAgain = prompt("Would you like to play again? (y or n)"); // play again if answer is y // 
    }
    while(playAgain == 'y'); // answer to play again // 
}

alert("Steel your mind for this, the ultimate game of skill!"); // message in beginning of game // 
start(); // calls function start // 