"use strict";
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.salary * 0.1;
    }
    pay() {
        console.log(`${this.name} has been paid.`);
    }
}
class Manager extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.salary * 0.2;
    }
    pay() {
        console.log(`${this.name} has been paid.`);
    }
}
const employees = [
    new Developer("Антон", 34, 60000),
    new Developer("Софія", 25, 50000),
    new Manager("Максим", 43, 80000),
    new Manager("Денис", 31, 70000),
];
let totalAnnualBonus = 0;
for (const employee of employees) {
    totalAnnualBonus += employee.getAnnualBonus();
}
console.log(`Total Annual Bonus: ${totalAnnualBonus}`);
for (const employee of employees) {
    employee.pay();
}
