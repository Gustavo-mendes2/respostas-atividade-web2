let readline = require("readline-sync");

let f = readline.questionFloat("Qual a temperatura: ");

let c = ((f - 32) * 5) / 9;

console.log("Temperatura celsius: ", c);
