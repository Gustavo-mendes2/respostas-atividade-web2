let read = require("readline-sync");

let num = read.questionInt("Fale um numero: ");

let resultado = 1;

for (let index = 1; index <= num; index++) {
  resultado *= index;
}

console.log("Fatorial: ", resultado);
