
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// wins losses and ties
var wins = 0;
var losses = 0;
var guessesLeft = 10;


function game () {
// Computer's choice
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

// test computerChoice is "t"   
// var computerChoice = "t";

document.onkeypress = function game(event) {
  var userGuess = event.key;
  if(userGuess === computerChoice){
    wins++;
  }   else {
    guessesLeft -- ;
  }
  if(guessesLeft === 0){
     guessesLeft = 10;
     game();
  };

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};
};
game();