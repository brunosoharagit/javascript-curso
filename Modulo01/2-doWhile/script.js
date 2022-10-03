/**
 * FAÇA {
 *  expressão
 * } ENQUANTO (ALGO)
 */

let velocidade = 100;

do {
    alert(`A velocidade do veículo é de ${velocidade} km/h.`);
    velocidade -= 20;
} while (velocidade > 0);

alert(`Velocidade final: ${velocidade} km/h.`);