class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }

    aumentaVel(aceleracao) {
        this.velocidade += aceleracao;
    }

    diminuiVel(freio) {
        (this.velocidade > freio) ? this.velocidade -= freio : console.log("Você está parado. Ligue seu carro.");
    }

    imprimeVel() {
        return `Velocidade atual: ${this.velocidade} km/h.`;
    }
}

let carro1 = new Carro("Citröen", "C3");

carro1.diminuiVel(5);

carro1.aumentaVel(10);
console.log(carro1.imprimeVel());