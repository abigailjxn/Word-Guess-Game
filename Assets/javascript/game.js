// Theme: Miyazaki Films

// Internal Logic

// 1. Define Variables

// Create array of Movies
    var Movies = ["Castle" + "In" + "the" + "Sky", "My Neighbor Totoro", "Kiki's Delivery Service", "Porco Rosso", "Princess Mononoke", "Spirited Away", "Howl's Moving Castle", "Ponyo", "The Wind Rises"];
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
// Display blanks for random movieTitle array
   for (j = 0; j < movieTitle.length; i++) {
    // var blahblah = document.getElementByID("some element in HTML")
       var mysteryMovie = document.getElementById("mysteryMovie")
       mysteryMovie.innerText = 
   }
   
    // Display number of guesses based on movieTitle array
        // blahblah.innerText = 
        // this changes the text of the doc
    // Letters already guessed is empty
 
// Create guessCounter to be [movieTitle.length + 5] and attach to HTML
// var guessCounter = (movieTitle.length + 5)

// 2. Mechanics

// GUESSING
// Receive input of player pressed key
document.onkeyup = function (event) {
    var playerGuess = event.key;
    console.log(playerGuess);

// Compare player pressed key to movieTitle list letter



// Include .indexOf() and .toLowerCase()
// Make lower case -> .toLowerCase(pressed key)
// Search string index -> movieTitle.indexOf(pressed key)??


// If (pressed key == any movieTitle letter && not already guessed)
    // add pressed key to 'correct' array
    // display letter in UI
    // continue to receive letters
    //if letter is in 'correct' or 'guessed' already, do nothing

// Else If (pressed key !== any list letter && not already guessed)
    // add pressed key to 'guessed'array
    // display letter in UI
    // guessCounter-- (minus 1)
    // display counter in UI
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
}
// 3. Display

// Perhaps this is included in the mechnics?

