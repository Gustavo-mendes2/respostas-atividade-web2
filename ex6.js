let readline = require("readline-sync");

let base = readline.questionFloat("Diga a base do triangulo: ");
let altura = readline.questionFloat("Diga a altura do triangulo: ");

let area = base * altura;
let perimetro = 2 * (base + altura);

console.log("Área: " + area);
console.log("Perímetro: " + perimetro);
