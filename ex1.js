import readline from "readline-sync";

console.log("Debug 1");

let numero = readline.questionInt();

if (numero < 0) {
  console.log("Numero negativo");
} else {
  console.log("Numero positivo");
}
