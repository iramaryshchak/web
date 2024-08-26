// Функція з параметром за замовчуванням
function greet(message, times) {
    if (times === void 0) { times = 3; }
    for (var i = 0; i < times; i++) {
        console.log(message);
    }
}
greet("Hello, World!");
greet("This will be printed twice", 2);
