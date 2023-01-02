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