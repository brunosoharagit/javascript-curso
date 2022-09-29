let altura = 2.13;
let peso = 75.99;

const mensagem = (mensagem) => {
    console.log(mensagem);
}

const imc = (peso / (Math.pow(altura, 2)));

const verificaStatusIMC = (imc) => {
    mensagem(`Seu IMC: ${imc.toFixed(2)}`);

    (imc < 18.5) ?
        mensagem("Abaixo do peso") :
        (imc >= 18.5 && imc < 25) ?
            mensagem("Peso normal") :
            (imc >= 25 && imc < 30) ?
                mensagem("Excesso de peso") :
                (imc >= 30 && imc < 35) ?
                    mensagem("Obesidade classe 1") :
                    (imc >= 35 && imc < 40) ?
                        mensagem("Obesidade classe 2") : mensagem("Obesidade classe 3")

}

verificaStatusIMC(imc);
