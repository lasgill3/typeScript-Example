//Simple function using typescript
//traditional function
function greet(name: string) {
    return "hello, " + name;
}   

//call the fucntion with a parameter
console.log(greet("Sarah"));

//A simple arrow function
//newer syntax
const welcome = (name: string ): string => {
    return "hello, " + name; 
}   

//call the arrow function with a parameter  
console.log(welcome("John"));


const beet =(name: string, age: number) => {
    return `Hello, ${name}. You are ${age} years old.`; 
}

console.log(beet("Alice", 30));

