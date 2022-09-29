let date = new Date();

const recruta = {
    nome: prompt("Diga seu nome: "),
    sobrenome: prompt("Seu sobrenome: "),
    areaEstudos: prompt("Qual sua área de estudos? "),
    anoNasc: prompt("E por último, qual seu ano de nascimento? "),
};

let idade = date.getFullYear() - recruta.anoNasc;

function imprimeDados() {
    console.log(date)
    alert(`${recruta.nome} ${recruta.sobrenome} - ${recruta.areaEstudos} - ${idade} anos`);
}

imprimeDados();