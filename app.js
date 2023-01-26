/**
 * Returns a random integer in the range [min, max], inclusive of min and max
 *
 * @param {min} The lowest possible integer returned
 * @param {max} The highest possible integer returned
 * @return {number} A random number between min and max (inclusive)
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
//empty array to store user guesses

// entry point - where main logic starts
function init() {
  console.log("app.js started");

  let playAgain = true;

  //execute play round function as long as playAgain is true.
  while (playAgain) {
    let userName = prompt("Hello!! What is your name?");
    let userRecord = playRound(userName);
    let userInput = prompt("Would you like to play again?");
    if (userInput.toLowerCase() === "yes") {
      playAgain = true;
    } else {
      playAgain = false;
      
    }
    
  
  }
   
}

//Plays a round of the game
function playRound(name) {
  let counter = 0;
  let userGuesses = [];
  let highScores = {};
  let secret = getRandomIntInclusive(1, 50);
  console.log("secret number: " + secret);
  // ask user for number, repeat guessing until correct
  let validInput = false;
  while (!validInput) {
    const result = guessOnce(secret);
      //pushes user guesses into array
      userGuesses.push(result[1]);
      console.log(userGuesses);
    let guessesAsString = arrayAsSentence(userGuesses);
    console.log(guessesAsString);
    counter++;
    console.log("Guess count: " + counter);
    if (result[0] === "Correct") {
      validInput = true;
      alert(
        `That's Correct ${name}! Your previous guesses were ${guessesAsString}!`
      );
      return result;
    } else {
      alert(`Sorry ${name}, ` + result[0]);
    }
  }
}

// collects user guess of a number
// returns a string: "Lower", "Higher", "Correct", or "Invalid Input, please enter integer"
function guessOnce(secretNumber) {
  let numInp = prompt("Guess a number...");
  console.log("numInp = ", numInp);
  const num = parseInt(numInp);
  console.log("num = ", num, ", is type " + typeof num);
  if (Number.isInteger(num)) {
    if (num < secretNumber) {
      return ["Guess Higher", num]
    } else if (num > secretNumber) {
      return ["Guess Lower", num]
    } else {
      return ["Correct", num]
    }
  } else {
    return "Invalid Input, please enter an integer";
  }
}
//Returns Array as sentence separated by commas
function arrayAsSentence(arr) {
  let str = "";
  for (let i = 0; i < arr.length - 1; i++) {
    str += arr[i] + ", ";
  }
  return str + arr[arr.length - 1];
}

init();
