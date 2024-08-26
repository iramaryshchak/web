function calculateIceCreamCost() {
    var _a, _b, _c;
    var size = (_a = prompt("Оберіть розмір стаканчика (маленький або великий):")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var cost = 0;
    if (size === "маленький") {
        cost += 10;
    }
    else if (size === "великий") {
        cost += 25;
    }
    else {
        alert("Невірний розмір стаканчика. Спробуйте ще раз.");
        return 0;
    }
    var toppings = ((_b = prompt("Оберіть начинку (шоколад, карамель, ягоди). Можна вибрати кілька, розділяйте комами:")) === null || _b === void 0 ? void 0 : _b.toLowerCase().split(",")) || [];
    toppings.forEach(function (topping) {
        topping = topping.trim();
        if (topping === "шоколад") {
            cost += 5;
        }
        else if (topping === "карамель") {
            cost += 6;
        }
        else if (topping === "ягоди") {
            cost += 10;
        }
        else {
            alert("\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u043D\u0430\u0447\u0438\u043D\u043A\u0430: ".concat(topping, "."));
        }
    });
    var marshmallow = (_c = prompt("Чи хочете ви додати маршмелоу? (так/ні):")) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    if (marshmallow === "так") {
        cost += 5;
    }
    return cost;
}
var totalCost = calculateIceCreamCost();
if (totalCost > 0) {
    alert("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(totalCost, " \u0433\u0440\u043D"));
}
