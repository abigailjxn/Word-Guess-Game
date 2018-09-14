// Theme: Miyazaki Films

// Internal Logic

// 1. Define Variables

// Create array of Movies
// Randomly Choose word to serve as game 'movieWord'
// List letters in game 'movieWord'
// Create variable for letter key (?)
// Create guessCounter to be [movieword.length + 5]
 

// 2. Mechanics

// GUESSING
// Receive input of player letter key
// Compare player letter key to movieWord list letter

// Display blanks for random movieWord array
    // Display number of guesses based on movieWord array
    // Letters already gussed is empty

// If (letter key == any list letter && not already guessed)
    // add letter key to 'correct' array
    // display letter in UI
    // continue to receive letters
    //if letter is in 'correct' or 'guessed' already, do nothing

// Else If (letter key !== any list letter && not already guessed)
    // add letter key to 'guessed'array
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