//A simple objecte example
let student: { name: string; age: number} = {
    name: "Latunji",
    age: 42,
};

console.log(`Student Name: ${student.name}, Age: ${student.age}`);

//a simple class example
class Car {
    constructor(public model: string, public year: number) {}
}

let myCar = new Car("Toyota", 2020);
console.log(`My Model: ${myCar.model}, Year: ${myCar.year}`);