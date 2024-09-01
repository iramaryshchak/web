abstract class Employee {
  protected name: string;
  protected age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  abstract getAnnualBonus(): number;
}

interface Payable {
  pay(): void;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.1;
  }

  pay(): void {
    console.log(`${this.name} has been paid.`);
  }
}

class Manager extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.2;
  }

  pay(): void {
    console.log(`${this.name} has been paid.`);
  }
}

const employees: (Employee & Payable)[] = [
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
