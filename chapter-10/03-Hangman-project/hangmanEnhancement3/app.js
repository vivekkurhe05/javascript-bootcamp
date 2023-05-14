const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman ('Cat', 3)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()


// In browser, shift control to window by clicking in window area and press letters
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
})