let typeString: string = "Good day!";
let typeNumber: number = 42;
let typeBoolean: boolean = true;
let typeAny: any = "any type";

console.log("String:", typeString);
console.log("Number:", typeNumber);
console.log("Boolean:", typeBoolean);
console.log("Any:", typeAny);

let stringArray: (string | number)[] = ["One", "Two", "Three", 1, true];
let numberArray: number[] = [1, 2, 3, 4, 5];

console.log("String Array:", stringArray);
console.log("Number Array:", numberArray);
