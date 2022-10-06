class Espaconave {
    constructor(nome, qtdTripulantes, velMaxRec) {
        this.nome = nome;
        this.qtdTripulantes = qtdTripulantes;
        this.velMaxRec = velMaxRec;
        this.velAtual = 0;
    }

    aumentaVel(aceleracao) {
        this.velAtual += aceleracao;
        if (this.velAtual > this.velMaxRec) {
            console.log("Velocidade máxima ultrapassada!!!");
        }
    }
}

class Transporte extends Espaconave {
    constructor(nome, qtdTripulantes, velMaxRec, pesoMaxDesc) {
        super(nome, qtdTripulantes, velMaxRec);
        this.pesoMaxDesc = pesoMaxDesc;
    }

    aumentaVel(aceleracao) {
        aceleracao /= 2;
        console.log(`Incrementando a velocidade em ${aceleracao} km/s.`);
        super.aumentaVel(aceleracao);
    }
}

let transp1 = new Transporte("Transportadora", 4, 500, 400);
console.log(transp1);
transp1.aumentaVel(210);

