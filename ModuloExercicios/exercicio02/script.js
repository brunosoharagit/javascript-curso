let num1 = parseFloat(prompt("Qual seu primeiro número?"));
let num2 = parseFloat(prompt("Qual seu segundo número?"));

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

alert(`
    soma: ${sum(num1, num2)}
    subtração: ${sub(num1, num2)}
    multiplicação: ${mul(num1, num2)}
    divisão: ${div(num1, num2)}
    módulo: ${mod(num1, num2)}
`)