function calculateIceCreamCost(): number {
  let size = prompt(
    "Оберіть розмір стаканчика (маленький або великий):"
  )?.toLowerCase();
  let cost = 0;

  if (size === "маленький") {
    cost += 10;
  } else if (size === "великий") {
    cost += 25;
  } else {
    alert("Невірний розмір стаканчика. Спробуйте ще раз.");
    return 0;
  }

  let toppings: string[] =
    prompt(
      "Оберіть начинку (шоколад, карамель, ягоди). Можна вибрати кілька, розділяйте комами:"
    )
      ?.toLowerCase()
      .split(",") || [];

  toppings.forEach((topping) => {
    topping = topping.trim();
    if (topping === "шоколад") {
      cost += 5;
    } else if (topping === "карамель") {
      cost += 6;
    } else if (topping === "ягоди") {
      cost += 10;
    } else {
      alert(`Невідома начинка: ${topping}.`);
    }
  });

  let marshmallow = prompt(
    "Чи хочете ви додати маршмелоу? (так/ні):"
  )?.toLowerCase();

  if (marshmallow === "так") {
    cost += 5;
  }

  return cost;
}

let totalCost = calculateIceCreamCost();
if (totalCost > 0) {
  alert(`Загальна вартість вашого морозива: ${totalCost} грн`);
}
