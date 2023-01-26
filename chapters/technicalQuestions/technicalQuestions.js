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

// Create a class that captures students. 
// Each student has a first name, last name, class year, and major.
// Create two examples of students.

class Student {
  constructor(firstName, lastName, classYear, major){
    this.firstName = firstName
    this.lastName = lastName
    this.classYear = classYear
    this.major = major
  }
}

console.log(new Student("Aaron", "Pagoada", "2023", "CS"))
console.log(new Student("John", "Doe", "2023", "QF"))