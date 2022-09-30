/**
 * O atacante tem seus seguintes atributos:
 * -- nome
 * -- pontos de vida
 * -- poder de ataque e o valor do dano
 */
let atacante = {
    nome: prompt("Qual o nome do atacante?"),
    dano: parseInt(prompt(`Qual será o dano de ${atacante.poder}?`))
};

/**
 * O defensor tem seus seguintes atributos:
 * -- nome
 * -- pontos de vida
 * -- se ele possui um escudo (Boolean)
 * 
 */
let defensor = {
    nome: prompt("Qual o nome do defensor?"),
    poderDeDefesa: parseInt(prompt("Quantos pontos de defesa do defensor?")),
    escudoHabilitado: prompt("O defensor terá escudo?")
};

