var Cat = /** @class */ (function () {
    function Cat(name, age, typeofAnimal) {
        this.name = name;
        this.age = age;
        typeofAnimal = typeofAnimal;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C."));
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, age) {
        this.name = name;
        this.age = age;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " \u043B\u0456\u0442\u0430\u0454."));
    };
    Bird.prototype.sing = function () {
        console.log("".concat(this.name, " \u0441\u043F\u0456\u0432\u0430\u0454."));
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name, age) {
        this.name = name;
        this.age = age;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " \u043F\u043B\u0430\u0432\u0430\u0454."));
    };
    return Fish;
}());
var myCat = new Cat("Кет", 3, "Домашня");
var myBird = new Bird("Флай", 1);
var myFish = new Fish("Немо", 2);
myCat.move();
myBird.move();
myBird.sing();
myFish.move();
