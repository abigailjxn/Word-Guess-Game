// Theme: Miyazaki Films

// Internal Logic

// 1. Define Variables

// Create array of Movies
var Movies = ["Castle In the Sky", "My Neighbor Totoro", "Kiki's Delivery Service", "Porco Rosso", "Princess Mononoke", "Spirited Away", "Howl's Moving Castle", "Ponyo", "The Wind Rises"];
console.log(Movies);
// Randomly Choose word to serve as game 'movieTitle'
// Create variable that generates random number between 0 and Movies - 1
var i = Math.floor(Math.random() * 9);
console.log(i);
// Create variable for chosen word
var movieTitle = Movies[i]
console.log(movieTitle);
// List lower case letters in game 'lowerMovieTitle'
movieTitle = movieTitle.toLowerCase();
console.log(movieTitle);
console.log(movieTitle.length);
console.log(movieTitle[0]);

// var blahblah = document.getElementByID("some element in HTML")
var mysteryMovieDiv = document.getElementById("mysterymovie");
var blanks = "";
for (j = 0; j < movieTitle.length; j++) {
    blanks += "-";
    mysteryMovieDiv.innerText = (blanks);
}
// Display number of guesses based on movieTitle array
// Create guessCounter to be [movieTitle.length + 5] and attach to HTML
var guessCounterDisplay = document.getElementById("guesscounter");
// console.log("guessCounter", guessCounter);
guessCounterDisplay.innerText = (movieTitle.length + 5);
guessCounter = movieTitle.length + 5;
console.log(guessCounter);

// 2. Mechanics

// GUESSING
// Receive input of player pressed key
document.onkeyup = function (event) {
    var playerGuess = event.key;
    console.log(playerGuess);

    // Connect Wrong Player Letters to DOM and create array to hold the letters
    var guessWrongDisplay = document.getElementById("guessedwrong");
    var guessWrong = [];
    var guessRightArray = [];
    console.log(guessWrong);

    // Compare player pressed key to movieTitle list letter

    // If (pressed key == any movieTitle letter && not already guessed)
    for (j = 0; j < movieTitle.length; j++) {
        
        blanks[j] = movieTitle.charAt(j);
        if ((movieTitle.indexOf(playerGuess) !== -1) && (playerGuess == movieTitle.charAt(j))) {
            console.log("it's a match");
            guessRightArray.push(playerGuess);
            console.log(guessRightArray);
            var guessRight = movieTitle[j].replace(blanks[j], playerGuess);
            console.log(guessRight);
            // movieTitle.charAt(j).replace(playerGuess);
            //mysteryMovieDiv.innerText = (playerGuess);
            // blanks[j] = playerGuess;
            // console.log(blanks[j]);
            //blanks[j].innerText = playerGuess;
            mysteryMovieDiv.innerText = guessRight;
            console.log(movieTitle.charAt(j));

            // if no dashes left then win 

        }
        // ignore spaces and puncutation?
        // if (movieTitle[i] === "" ) {
        //     console.log("it's a space");
        // }
    }
    if ((movieTitle.indexOf(playerGuess) === -1 && (guessCounter > 0))) {
        guessWrong.push(playerGuess);
        console.log(guessWrong);
        guessCounter -= 1;
        console.log(guessCounter);
        guessWrongDisplay.innerText += guessWrong;
        guessCounterDisplay.textContent = guessCounter;
    }
    else if ((movieTitle.indexOf(playerGuess) === -1 && (guessCounter === 0))){
        alert("Try again!");

        //reset the game
    }

}

// If Player Guess IS a character in the string array (and therefore not -1), then there is a character that matches
    // display letter in UI
    // continue to receive letters
    //if letter is in 'correct' or 'guessed' already, do nothing


//Incorrect condition
// Else If (pressed key !== any list letter && not already guessed)

//     // guessWrong.appendChild(guessWrong); S


    // If letter key is in 'correct' or 'guessed' already, do nothing

// Else strikeCounter == 0
    // go to loss

// WINS / LOSSES
// If correct array == movieWord array 
    // win counter +1
    // play song? or show clip? or some image?
    // reset with new word, new strikeCounter

// If strikeCoutner == 0
    // Game over display
    // reset with new word, new strikeCounter
// }
// 3. Display

// Perhaps this is included in the mechnics?

