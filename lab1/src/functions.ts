function greet(message: string, times: number = 3): void {
  for (let i = 0; i < times; i++) {
    console.log(message);
  }
}

greet("Hello, World!");
greet("This will be printed twice", 2);
