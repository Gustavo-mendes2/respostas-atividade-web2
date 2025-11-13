let readline = require("readline-sync");

let usuario = readline.question("Qual o usuário: ");
let senha = readline.question("Qual a senha: ");

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha incorretos.");
}
