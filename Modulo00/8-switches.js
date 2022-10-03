/***
 * SWITCH(expressão)
 *  CASE A: faça algo
 *  CASE B: faça outra coisa e PARE
 *  CASE C: faça outra coisa
 *  POR PADRÃO: faça algo sempre
 */

let letra = prompt("Qual letra do ABCDário você escolheu?");

switch (letra) {
    case "a":
        console.log("Letra A");

    case "b":
        console.log("Letra B");

    case "c":
        console.log("Letra C");

    default:
        console.log("Finalizando o programa. . .");
}