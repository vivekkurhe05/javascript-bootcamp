const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}.`

//     let self = this
//     this.likes.forEach(function (like) {
//         bio += ` ${self.firstName} likes ${like}.`
//     })

//     return bio
// }


// or an alternative to above commented out funtion, use of arrow function

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach( (like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())