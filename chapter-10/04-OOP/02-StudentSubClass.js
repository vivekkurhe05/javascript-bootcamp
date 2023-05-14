// 1. Create class for students
// 2. Track student grade. 0-100
// 3. Override bio to print a passing or failing message. 70 and above "Andrew is passing the class"
// 4. Create "updateGrade" that takes the amount to add or remove from the grade

// Create Student
// Print status (failing or passing)
// Change grade to change status
// Print status again

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

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
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
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student('Andrew', 'Mead', 27, 88, [])
console.log(me.getBio())
me.updateGrade(-20)
console.log(me.getBio())
