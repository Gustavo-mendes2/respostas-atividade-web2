let readline = require("readline-sync");

let numero = readline.questionInt("Fale um número: ");

if (numero < 0) {
  console.log("Numero negativo");
} else {
  console.log("Numero positivo");
}
