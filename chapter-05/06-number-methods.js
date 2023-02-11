/**
 * Generate random numbers between 10 and 20
 */

let min = 10
let max = 20
let randNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randNum)

// Challenge area
// 1-5 true - if correct false - if not

function makeGuess(guess) {
    let min = 1
    let max = 5

    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return guess === randNum;
}

console.log(makeGuess(1))