var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, year, color) {
        var _this = _super.call(this, "Toyota", model, year) || this;
        _this.color = color;
        return _this;
    }
    Toyota.prototype.displayInfo = function () {
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.getYear()));
        console.log("Color: ".concat(this.color));
    };
    return Toyota;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, engineType) {
        var _this = _super.call(this, "BMW", model, year) || this;
        _this.engineType = engineType;
        return _this;
    }
    BMW.prototype.displayInfo = function () {
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.getYear()));
        console.log("Engine Type: ".concat(this.engineType));
    };
    return BMW;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(model, year, isElectric) {
        var _this = _super.call(this, "Audi", model, year) || this;
        _this.isElectric = isElectric;
        return _this;
    }
    Audi.prototype.displayInfo = function () {
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.getYear()));
        console.log("Electric: ".concat(this.isElectric ? "Yes" : "No"));
    };
    return Audi;
}(Car));
var toyotaCorolla = new Toyota("Corolla", 2020, "Червона");
var toyotaCamry = new Toyota("Camry", 2021, "Чорна");
var bmwX5 = new BMW("X5", 2022, "V6");
var bmw320i = new BMW("320i", 2023, "Inline-4");
var audiA3 = new Audi("A3", 2024, true);
var audiQ7 = new Audi("Q7", 2022, false);
console.log("Toyota :");
toyotaCorolla.displayInfo();
toyotaCamry.displayInfo();
console.log("\nBMW :");
bmwX5.displayInfo();
bmw320i.displayInfo();
console.log("\nAudi :");
audiA3.displayInfo();
audiQ7.displayInfo();
