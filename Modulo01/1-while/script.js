let velocidade = 100; 

while (velocidade > 0) {
    alert(`O carro está a uma velocidade de ${velocidade} km/h.`);
    velocidade -= 20;
    alert("Diminuindo 20 km/h.");

    //if(velocidade === 40) {
    //    break;
    //}
}

alert("O carro parou.");