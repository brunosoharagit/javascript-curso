class Carro {
    constructor(nome, velMaxRec) {
        this.nome = nome;
        this.velMaxRec = velMaxRec;
        this.velAtual = 0;
    }

    aumentaVel(aceleracao) {
        this.velAtual += aceleracao;
        if (this.velAtual > this.velMaxRec) {
            console.log("Velocidade máxima ultrapassada!!");
        } 
    }
}

class CarroDoBruno extends Carro {
    aumentaVel() {
        console.log("Seu carro irá aumentar a velocidade em apenas 1000km/s");
        this.velAtual += 1000;
    }
}

let meuCarro = new CarroDoBruno("Nexus 100m", 200);
meuCarro.aumentaVel();
console.log(meuCarro);

