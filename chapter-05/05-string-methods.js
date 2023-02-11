// Challenge area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password

function isValidPassword(pwd) {
    return pwd.length > 8 && !pwd.includes('password')
}

console.log(isValidPassword('asdf1')) // false
console.log(isValidPassword('asdf1#@%@#32323')) // true
console.log(isValidPassword('asdf1password')) // false