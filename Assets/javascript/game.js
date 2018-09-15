// Theme: Miyazaki Films

// Internal Logic

// 1. Define Variables

// Create array of Movies
    var Movies = ["Castle In the Sky", "My Neighbor Totoro", "Kiki's Delivery Service", "Porco Rosso", "Princess Mononoke", "Spirited Away", "Howl's Moving Castle", "Ponyo", "The Wind Rises"];
    console.log(Movies);
// Randomly Choose word to serve as game 'movieTitle'
    // Create variable that generates random number between 0 and Movies - 1
        var a = Math.floor(Math.random() * 9);
        console.log(a);
    // Create variable for chosen word
    var movieTitle = Movies[a]
    console.log(movieTitle);
// List letters in game 'movieTitle'
// Create variable for pressed key (?)
// Create guessCounter to be [movieTitle.length + 5]
 

// 2. Mechanics

// GUESSING
// Receive input of player pressed key
// Compare player pressed key to movieTitle list letter

// Display blanks for random movieTitle array
    // Display number of guesses based on movieTitle array
    // Letters already gussed is empty

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

// 3. Display

// Perhaps this is included in the mechnics?