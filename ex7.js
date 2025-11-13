let readline = require("readline-sync");

let palavra = readline.question("Diga a palavra: ").toLowerCase();
let contador = 0;

for (let letra of palavra) {
  if ("aeiou".includes(letra)) {
    contador++;
  }
}

console.log("A palavra tem " + contador + " vogais.");
