/**
 * O atacante tem seus seguintes atributos:
 * -- nome
 * -- pontos de vida
 * -- poder de ataque e o valor do dano
 */
let atacante = {
    nome: prompt("Qual o nome do atacante?"),
    poderDeAtaque: parseInt(prompt(`Qual é o seu poder de ataque?`))
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
    hp: prompt("Quantos pontos de vida o defensor possui?"),
    poderDeDefesa: parseInt(prompt("Quantos pontos de defesa do defensor?")),
    escudoHabilitado: prompt("O defensor terá escudo?")
};

let danoCausado = 0;

if (atacante.poderDeAtaque > defensor.poderDeDefesa && defensor.escudoHabilitado === "Não") {
    danoCausado = atacante.poderDeAtaque - defensor.poderDeDefesa;
}
else if (atacante.poderDeAtaque > defensor.poderDeDefesa && defensor.escudoHabilitado === "Sim") {
    danoCausado = (atacante.poderDeAtaque - defensor.poderDeDefesa) / 2;
}

defensor.hp -= danoCausado;

alert(`${atacante.nome} causou ${danoCausado} pontos de dano em ${defensor.nome}`);
alert(
 `  ${atacante.nome}
    Poder de Ataque: ${atacante.poderDeAtaque}

    ${defensor.nome}
    Pontos de vida: ${defensor.hp}
    Poder de Defesa: ${defensor.poderDeDefesa}
    Possui escudo? ${defensor.escudoHabilitado}
`)
