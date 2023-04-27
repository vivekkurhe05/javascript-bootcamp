// 1. Create a constructor function for the hangman game.
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console.


function Hangman (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman ('Cat', 3)
console.log(game1)

const game2 = new Hangman ('New Jersey', 4)
console.log(game2)