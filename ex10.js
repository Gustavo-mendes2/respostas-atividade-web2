let readline = require("readline-sync");

let segundos = readline.questionInt("Quantos segundos ? ");

let horas = Math.floor(segundos / 3600);
let minutos = Math.floor((segundos % 3600) / 60);
let seg = segundos % 60;

console.log(`${horas} hora(s), ${minutos} minuto(s) e ${seg} segundo(s).`);
