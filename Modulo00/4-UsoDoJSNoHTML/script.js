//let nome = "Bruno";
let nome = window.prompt("Diga o seu nome:");
let sobrenome = "Sohara";

let idade = 19;

//console.log(nome + " " + sobrenome + ", " + idade);


console.error(nome);
console.warn(nome);

let confirmacao = window.confirm(`Confirmar este nome? ${nome}`);
window.alert(nome);