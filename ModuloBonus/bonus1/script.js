class Holerite {
    static get valorHora() {
        return 14.75;
    }
    
    constructor(nome, totalHrsDia, totDiasTrabalhados) {
        this.nome = nome;
        this.totalHrsDia= totalHrsDia;
        this.totDiasTrabalhados = totDiasTrabalhados;
    }

    calculaSalario() {
        return `Salário de ${this.nome}: R$ ${(Holerite.valorHora * this.totalHrsDia* this.totDiasTrabalhados).toFixed(2)}`;
    }
}

let holBruno = new Holerite("Bruno", 8, 22);
console.log(holBruno.calculaSalario());