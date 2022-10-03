let valorMetro = parseInt(prompt("Qual será seu valor em metros"));

let medida = prompt("Qual será a medida utilizada para conversão?");

const valorKm = (valorMetro) => valorMetro / 1000;
const valorHm = (valorMetro) => valorMetro / 100;
const valorDam = (valorMetro) => valorMetro / 10;

const valorDm = (valorMetro) => valorMetro * 10;
const valorCm = (valorMetro) => valorMetro * 100;
const valorMm = (valorMetro) => valorMetro * 1000;


switch (medida) {
    case "km":
        alert(`Valor em Quilômetros: ${valorKm(valorMetro)} km.`);
        break;

    case "hm":
        alert(`Valor em Hectômetros: ${valorHm(valorMetro)} hm.`);
        break;

    case "dam":
        alert(`Valor em Decâmetros: ${valorDam(valorMetro)} dam.`);
        break;

    case "dm":
        alert(`Valor em Decímetros: ${valorDm(valorMetro)} dm.`);
        break;

    case "cm":
        alert(`Valor em Centímetros: ${valorCm(valorMetro)} cm.`);
        break;

    case "mm":
        alert(`Valor em Milímetros: ${valorMm(valorMetro)} mm.`);
        break;

    default:
        alert("Medida inválida.");
}

