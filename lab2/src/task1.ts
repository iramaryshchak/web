interface Animal {
  name: string;
  age?: number;
  move(): void;
}
class Cat implements Animal {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  move(): void {
    console.log(`${this.name} ходить.`);
  }
}
class Bird implements Animal {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  move(): void {
    console.log(`${this.name} літає.`);
  }

  sing(): void {
    console.log(`${this.name} співає.`);
  }
}
class Fish implements Animal {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  move(): void {
    console.log(`${this.name} плаває.`);
  }
}
// Створюємо екземпляри класів
const myCat = new Cat("Кет", 3);
const myBird = new Bird("Флай", 1);
const myFish = new Fish("Немо", 2);

// Викликаємо методи
myCat.move();

myBird.move();
myBird.sing();

myFish.move();
