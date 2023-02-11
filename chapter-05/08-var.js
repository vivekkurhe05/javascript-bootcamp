/**
 * 1. With var, we can declare the variable with the same name again
 */

var firstName = 'Andrew'
firstName = 'Mike'

var firstName = 'Jen'
console.log(firstName)

/**
 * 2. var is function scoped
 */

if(true) {
    var fname = 'Vivek'
}

console.log(fname)

// or functin scoped example

const setName = function () {
    var lname = 'Kurhe'
}

setName()
console.log(lname)