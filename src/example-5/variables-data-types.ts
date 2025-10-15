//Part 1 Basic Variables 
// Declare a variable with a specific type
let message: string = "Hello, TypeScript!";
console.log(message);

//Part 2 - Arrays  
// declare an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers:, ${numbers}`);   
console.log(`First number: ${numbers[0]}`);

//Part 3: var, let, const
// var variables can be redeclared and reassigned
var varVariable: string = "I am a var variable";
var varVariable: string = "I am a var variable2";
varVariable = "I have been reassigned";
console.log(`var variable: ${varVariable}`);


//let variables cannot be redeclared but can be reassigned
let letVariable: string = "Im a let variable"; 
letVariable = "I have been reassigned";
console.log(`let variable: ${letVariable}`);

// const variables cannot be redeclared or reassigned
const pi: number = 3.14; 
console.log(`const variable: ${pi}`);  
