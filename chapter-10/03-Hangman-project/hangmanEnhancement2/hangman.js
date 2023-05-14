// 1. Display the puzzle to the browser instead of the console
// 2. Display the guesses left to the browser instead of the console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

// 1. Setup new "status" property with initital value of "playing"
// 2. Create method for recalculating status to "playing", "finished", or "failed"
// 3. Call that method after a guess is processed
// 4. Use console.log to print the status

// Start the game and see "playing"
// Make two incorrect guesses to see "failed"
// Refresh the browser and guess "c", "a", and "t" to see "finished"

function Hangman (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    // or
    
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    
    // const finished = lettersUnguessed.length === 0

    // let finished = true

    // or

    // this.word.forEach((letter) => {
    //     if(this.guessedLetters.includes(letter)) {

    //     } else {
    //         finished = false
    //     }
    // })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if(finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(isUnique) {
        this.guessedLetters.push(guess)
    }

    if(isUnique && isBadGuess) {
        this.remainingGuesses--
    }

    this.calculateStatus()
}