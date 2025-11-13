let readline = require("readline-sync");

let n1 = readline.questionFloat("Nota 1: ") * 2;
let n2 = readline.questionFloat("Nota 2: ") * 3;
let n3 = readline.questionFloat("Nota 3: ") * 5;

let final = (n1 + n2 + n3) / 10;

console.log("Nota final: ", final);
