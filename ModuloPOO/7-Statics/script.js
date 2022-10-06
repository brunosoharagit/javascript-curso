//0. cria o objeto, com construtor e seu método
class RunescapePlayer {
    constructor(nickname, combatLvl, skillLvl) {
        this.nickname = nickname;
        this.combatLvl = combatLvl;
        this.skillLvl = skillLvl;
    }

    static showSkillLvl(skillLvl) {
        console.log(`Nível de habilidade: ${skillLvl}`);
    }
}

//1. instancia, primeiro, o objeto para a criação do nick
let yotyan = new RunescapePlayer("Yotyan", 138, 2861);
let nana_sz = new RunescapePlayer("Nana sz", 138, 2892);

//2. declara uma nova variável, para referenciar o método do objeto 
//criado para este exemplo e referenciar cada o objeto e seus atributos
let yotyanSkill = RunescapePlayer.showSkillLvl(yotyan.skillLvl);
let nanaSkill = RunescapePlayer.showSkillLvl(nana_sz.skillLvl);