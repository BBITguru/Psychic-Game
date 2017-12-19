
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// wins losses and ties
var wins = 0;
var losses = 0;
var guessesLeft;
var computerChoice;


function initializeGame () {
// Computer's choice
  computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(computerChoice);
  guessesLeft = 10;
}
// test computerChoice is "t"   
// var computerChoice = "t";

document.onkeypress = function game(event) {
  var userGuess = event.key;
  if(userGuess === computerChoice){
    wins++;
    initializeGame();
  }   else {
    guessesLeft -- ;
  }
  if(guessesLeft === 0){
     losses++;
     initializeGame();
  };

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

initializeGame();