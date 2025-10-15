// import {readFile} from "fs";
const { readFile } = require('fs'); 

//Read a text file 
readFile('src/example-3/example.txt', 'utf8', (err: any, data: any) => {
    if (err) {
        console.error("error readingf file: ",  err.message);
    } else {
        console.log("file content: ");
        console.log(data);
    }
});

