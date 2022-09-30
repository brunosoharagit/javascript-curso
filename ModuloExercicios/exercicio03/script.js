let veic1 = {
    nome: prompt("Qual o nome do carro 1?"),
    velocidade: parseInt(prompt("Qual a velocidade do carro?"))
}

let veic2 = {
    nome: prompt("Qual o nome do carro 2?"),
    velocidade: parseInt(prompt("Qual a velocidade do carro?"))
}

const compararVelocidade = () => {
    veic1.velocidade > veic2.velocidade ? alert(`${veic1.nome} tem velocidade maior que ${veic2.nome}`) : alert(`${veic2.nome} tem velocidade maior que ${veic1.nome}.`);
}

compararVelocidade();