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

const myPerson = new Person('Andrew', 'Mead', 27, ["Teaching","Biking"])
console.log(myPerson.getBio())
myPerson.setName("Vivek Kurhe")
console.log(myPerson.getBio())
const myEmp = new Employee('Sagar', 'Kukade', 30, "Automation engineer", ["Hiking","Shopping"])
console.log(myEmp)
console.log(myEmp.getBio())
console.log(myEmp.getYearsLeft())