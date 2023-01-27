// Technical Questions

// Building a class in JavaScript

class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        return `${this.name} makes a noise.`
    }
}

class Dog extends Animal {
    constructor(name){
        super(name)
    }

    speak(){
        return `${this.name} barked at you.`
    }
}


class Person {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  introduce(){
    console.log(`Hi! My name is ${this.firstName}.`)
  }
}

// Create a class that captures students. 
// Each student has a first name, last name, class year, and major.
// Create two examples of students.

class Student extends Person {
  constructor(firstName, lastName, classYear, major){
    super(firstName, lastName)
    this.classYear = classYear
    this.major = major
  }

  sayMajor(){
    console.log(`I study ${this.major}.`)
  }
}

const aaron = new Student("Aaron", "Pagoada", "2023", "CS")
const john = new Student("John", "Doe", "2023", "QF")

aaron.introduce()
john.sayMajor()

