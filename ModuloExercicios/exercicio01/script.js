let nome = prompt("Diga seu nome: ");
let sobrenome = prompt("Seu sobrenome: ");
let departamento = prompt("Qual seu campo de estudos? ");
let anoNasc = prompt("E por último, qual seu ano de nascimento? ");
const anoAtual = 2022;
let idade = anoAtual - anoNasc;

function imprimeDados() {
    console.log(`${nome} ${sobrenome} - ${departamento} - ${idade} anos`);
}

imprimeDados();