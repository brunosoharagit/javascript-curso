console.log("1 - Tipos para variáveis");

var nome = "Bruno";
var idade = 19;
var altura = 1.73;
var temMotivacaoNaVida = false;
var temDinheiro = null;
var poderDeLuta = undefined;

var linguagemFavorita = {
    nome: 'JavaScript',
    anoCriacao: 1995,
    caracteristicas: ['Orientada a Objetos', 'Orientada a Eventos', 'Funcional', 'Multiparadigma', 'Tipagem Dinâmica']
}

var boasVindas = (nome) => {
    return `Olá, ${nome}!!`;
}

console.log(nome, idade, altura, temMotivacaoNaVida, temDinheiro, poderDeLuta);
console.log(linguagemFavorita);

console.log(nome[3]);
console.log(nome.length);
console.log(boasVindas(nome));
console.log(typeof boasVindas);