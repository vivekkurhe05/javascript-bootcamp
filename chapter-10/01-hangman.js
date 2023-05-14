// 1. Create a constructor function for the hangman game.
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console.

// No guesses? -> ***
// Guessed "c", "b", and "t"? -> c*t

function Hangman (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c','e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

const game1 = new Hangman ('Cat', 3)
console.log(game1.getPuzzle())

const game2 = new Hangman ('New Jersey', 4)
console.log(game2.getPuzzle())