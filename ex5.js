let read = require("readline-sync");

let valor = read.questionInt("Diga o número: ");
console.log("Números pares de 0 até " + valor + ":");

for (let i = 0; i <= valor; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
