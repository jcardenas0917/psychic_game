//list of letter for computer
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var wins = 0;
var losses = 0;
var guess = 10;
var lettersUsed = [];
var computerLetter;

 function startGame() {
  // generates a random word form the randon word array
  computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  lettersUsed = [];
  guess = 10;
  console.log(computerLetter);
  document.getElementById("guess").innerHTML = "Guesses Left: " + guess;
  document.getElementById("letterUsed").innerHTML = "Your Guesses so far: ";
  }

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;
  lettersUsed.push(userGuess);
  document.getElementById("letterUsed").innerHTML = "Your Guesses so far: "+ lettersUsed;
  // console.log(userGuess)
 
  if (userGuess === computerLetter) {
    wins++;
    document.getElementById("wins").innerHTML = "Wins "+ wins;
    guess = 10;
    startGame();  
  } else if (userGuess !== computerLetter){
     guess--;
     document.getElementById("guess").innerHTML = "Guesses Left: " + guess;
  }
  if (guess === 0) {
    losses++;
    document.getElementById("losses").innerHTML = "Losses "+ losses;
    startGame()
  }
  
  
};
