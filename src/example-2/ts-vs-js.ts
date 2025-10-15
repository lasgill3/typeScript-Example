//Type Safety Example
let doAge: number = 42;
doAge = 13; 
console.log(`${doAge}`);

let birdType: string = "Parrot";

//Enum 
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(Color[c]); 
