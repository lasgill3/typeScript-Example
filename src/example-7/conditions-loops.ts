//A simple conditional statement
let myAge: number = 18;
if (myAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//A simple for loop
for (let i: number = 0; i < 5; i++) {
    console.log(`Index: ${i}`);
}   

const checkSign = (integer:number) => {
    if (integer > 0) {
        return "Positive";
    } else if (integer < 0) {
        return "Negative";
    } else if (integer == 0) {
        return "Zero";
    }
    
}

console.log(checkSign(0));