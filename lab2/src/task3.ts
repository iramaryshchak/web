abstract class Car {
  protected make: string;
  protected model: string;
  private year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  abstract displayInfo(): void;

  protected getYear(): number {
    return this.year;
  }
}

class Toyota extends Car {
  private color: string;

  constructor(model: string, year: number, color: string) {
    super("Toyota", model, year);
    this.color = color;
  }

  displayInfo(): void {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.getYear()}`);
    console.log(`Color: ${this.color}`);
  }
}

class BMW extends Car {
  private engineType: string;

  constructor(model: string, year: number, engineType: string) {
    super("BMW", model, year);
    this.engineType = engineType;
  }

  displayInfo(): void {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.getYear()}`);
    console.log(`Engine Type: ${this.engineType}`);
  }
}

class Audi extends Car {
  private isElectric: boolean;

  constructor(model: string, year: number, isElectric: boolean) {
    super("Audi", model, year);
    this.isElectric = isElectric;
  }

  displayInfo(): void {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.getYear()}`);
    console.log(`Electric: ${this.isElectric ? "Yes" : "No"}`);
  }
}

const toyotaCorolla = new Toyota("Corolla", 2020, "Червона");
const toyotaCamry = new Toyota("Camry", 2021, "Чорна");

const bmwX5 = new BMW("X5", 2022, "V6");
const bmw320i = new BMW("320i", 2023, "Inline-4");

const audiA3 = new Audi("A3", 2024, true);
const audiQ7 = new Audi("Q7", 2022, false);

console.log("Toyota :");
toyotaCorolla.displayInfo();
toyotaCamry.displayInfo();

console.log("\nBMW :");
bmwX5.displayInfo();
bmw320i.displayInfo();

console.log("\nAudi :");
audiA3.displayInfo();
audiQ7.displayInfo();
