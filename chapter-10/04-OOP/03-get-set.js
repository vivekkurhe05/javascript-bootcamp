const data = {
    get location () {
        return 'This is a test'
    },

    set location (value) {

    }
}

 // Code that uses the data object
 data.location = '  Philadelphia    '
 data.location = ' New York'
 console.log(data)

 class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach( (like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio () {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }

    getYearsLeft () {
        return `Employement years left are ${parseInt(65-this.age)}`
    }
}

class Student extends Person {
    constructor (firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    updateGrade (change) {
        this.grade += change
    }

    getBio () {
        const status = this.grade >= 70 ? "passing" : "failing"
        return `${this.fullName} is ${status} the class.`
    }
}

const myPerson = new Person('Andrew', 'Mead', 27, ["Teaching","Biking"])
console.log(myPerson.getBio())
myPerson.fullName = "Vivek Kurhe"
console.log(myPerson.getBio())

const myEmp = new Employee('Sagar', 'Kukade', 30, "Automation engineer", ["Hiking","Shopping"])
console.log(myEmp)
console.log(myEmp.getBio())
console.log(myEmp.getYearsLeft())

const myStud = new Student('Ricky', 'Ponting', 45, 78, ["Playing"])
myStud.fullName = 'Chris Gayle'
myStud.updateGrade(88)
console.log(myStud.getBio())