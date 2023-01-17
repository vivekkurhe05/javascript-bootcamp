let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.summary);

// Challenge area
// Create function - take fahrenheit in - return object with all three

let tempConversion = function (fahrenheit) {
    return {
        fahrenheitToCelsius: (fahrenheit - 32) * 5 / 9,
        fahrenheitToKelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let fahrenheit = 74;
let celsius = tempConversion(fahrenheit);
let kelvin = tempConversion(fahrenheit);

console.log(celsius.fahrenheitToCelsius);
console.log(kelvin.fahrenheitToKelvin);