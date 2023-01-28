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
    console.log(`I'm ${this.firstName} and I study ${this.major}.`)
  }
}

const aaron = new Student("Aaron", "Pagoada", "2023", "CS")
const john = new Student("John", "Doe", "2023", "QF")

aaron.introduce()
john.sayMajor()

class Shape {
  constructor(name, sides, sideLength){
    this.name = name
    this.sides = sides
    this.sideLength = sideLength
  }

  calcPerimeter(){
    return this.sideLength * this.sides
  }
}

class Square extends Shape {
  constructor(sideLength){
    super('square', 4, sideLength)
  }

  calcArea(){
    return this.sideLength * this.sideLength
  }
}

class Triangle extends Shape {
  constructor(sideLength){
    super('triangle', 3, sideLength)
  }
}

const triangle = new Triangle(9)

console.log(triangle.calcPerimeter())