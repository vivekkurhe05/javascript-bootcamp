// 1. Disable new guesses unless "playing"
// 2. Setup a new method to get back a status message

// Playing -> Guesses left: 3
// Failed -> Nice try! The word was "Cat".
// Finished -> Great work! You guessed the word.

function Hangman (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if(finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    if(this.status === "playing") {
        return `Guesses left: ${this.remainingGuesses}`
    } else if(this.status === "failed") {
        return `Nice try! The word was "${this.word.join('')}".`
    } else {
        return "Great work! You guessed the word."
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

    if(this.status != "playing") {
        return
    }

    if(isUnique) {
        this.guessedLetters.push(guess)
    }

    if(isUnique && isBadGuess) {
        this.remainingGuesses--
    }

    this.calculateStatus()
}