const nomeTurista = prompt("Qual seu nome, turista?");
let cidades = "";
let cont = 0;

let continua = prompt("Você visitou alguma cidade? [Sim/Não]");

while (continua === "sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?");
    cidades += " - " + cidade + "\n";
    cont++;
    continua = prompt("Você visitou alguma outra cidade? [Sim/Não]");
}

alert(`Turista: ${nomeTurista}
        \nCidades visitadas: \n ${cidades}
        \nQuantidade de cidades visitadas: ${cont}
`);