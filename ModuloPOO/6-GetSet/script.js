/*class Corredor {
    constructor(nomeAtleta) {
        this.nomeAtleta = nomeAtleta;
        this.velAtual = 0;
    }

    set suaVelAtual(novaVelocidade) {
        (novaVelocidade < 30) ? this.velAtual = 30 : this.velAtual = velAtual;
    }
}

let usainBolt = new Corredor("Usain Bolt");

usainBolt.velAtual = 20;

console.log(usainBolt);*/

class EstacaoProcRecursos {
    constructor(nome, recMesProc) {
        this.nome = nome;
        this.recMesProc = recMesProc;
    }

    get cargaSemanalDados() {
        return (this.recMesProc / 4);
    }
}

let processRecursos = new EstacaoProcRecursos("Lixo", 4000);
console.log(processRecursos.cargaSemanalDados);
processRecursos.recMesProc = 9000;
console.log(processRecursos.cargaSemanalDados);