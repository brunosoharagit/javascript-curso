class Engenheiro {
    constructor(nome, crea, departamento) {
        this.nome = nome;
        this.crea = crea;
        this.departamento = departamento;
    }
}

class Empresa {
    constructor(nomeEmpresa, setor, engNome, engCREA, engDepto) {
        this.nomeEmpresa = nomeEmpresa;
        this.setor = setor;
        this.engenheiro = new Engenheiro(engNome, engCREA, engDepto);
    }
}

let empresa1 = new Empresa("São Bernardo Engenharia", "Projetos e Consultoria de Engenharia", "Bruno Sohara", "000000001-0", "Projetos");
console.log(empresa1);