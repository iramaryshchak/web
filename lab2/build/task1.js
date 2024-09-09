"use strict";
class Cat {
    constructor(name, age, typeofAnimal) {
        this.name = name;
        this.age = age;
        typeofAnimal = typeofAnimal;
    }
    move() {
        console.log(`${this.name} ходить.`);
    }
}
class Bird {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} літає.`);
    }
    sing() {
        console.log(`${this.name} співає.`);
    }
}
class Fish {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} плаває.`);
    }
}
const myCat = new Cat("Кет", 3, "Домашня");
const myBird = new Bird("Флай", 1);
const myFish = new Fish("Немо", 2);
myCat.move();
myBird.move();
myBird.sing();
myFish.move();
