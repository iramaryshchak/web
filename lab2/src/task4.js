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
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.1;
    };
    Developer.prototype.pay = function () {
        console.log("".concat(this.name, " has been paid."));
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.2;
    };
    Manager.prototype.pay = function () {
        console.log("".concat(this.name, " has been paid."));
    };
    return Manager;
}(Employee));
var employees = [
    new Developer("Антон", 34, 60000),
    new Developer("Софія", 25, 50000),
    new Manager("Максим", 43, 80000),
    new Manager("Денис", 31, 70000),
];
var totalAnnualBonus = 0;
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    totalAnnualBonus += employee.getAnnualBonus();
}
console.log("Total Annual Bonus: ".concat(totalAnnualBonus));
for (var _a = 0, employees_2 = employees; _a < employees_2.length; _a++) {
    var employee = employees_2[_a];
    employee.pay();
}
