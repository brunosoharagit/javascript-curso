class Espaconave {
    constructor(nome, maxTrip, velMaxRec) {
        this.nome = nome;
        this.maxTrip = maxTrip;
        this.velMaxRec = velMaxRec;
        this.velAtual = 0;
    }

    aumentaVel(aceleracao) {
        (this.velAtual < this.velMaxRec) ? this.velAtual += aceleracao : console.log("Velocidade Máxima Ultrapassada!");
    }
}

class Batalha extends Espaconave {
    parar() {
        this.velAtual = 0;
        console.log("Recolhendo armas e parando a nave.");
    }
}

class Descoberta extends Espaconave {
    parar() {
        this.velAtual = 0;
        console.log("Parando a descoberta e a nave");
    }
}


let darwin = new Descoberta("Darwin", 10, 200);
let euphoria = new Batalha("Euphoria", 30, 400);

console.log(darwin);
console.log(euphoria);

darwin.aumentaVel(250);
euphoria.aumentaVel(500);

console.log(darwin);
console.log(euphoria);


