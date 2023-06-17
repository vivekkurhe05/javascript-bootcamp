const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman ('Car parts', 3)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if(e.target.readyState === 4) {
        console.log("An error has occurred")
    }
})

request.open('GET','https://puzzle.mead.io/puzzle?wordCount=2')
request.send()

// 1. Make a new request for all countries
// 2. Parse the responseText to get back the array of objects
// 3. Find your country object by it's country code (alpha2code property)
// 4. Print the full country name (name property)

const countryCode = 'US'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) =>{
    if (e.target.readyState === 4 && e.target.status === 400) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find(country => country.alpha2code === countryCode)
        console.log(country.name)
    } else if(e.target.readyState === 4) {
        console.log("Unable to fetch data")
    }
})

countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
countryRequest.send()