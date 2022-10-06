class Spaceship {
    static get decelerationRate() {
        return 0.15
    }

    constructor(name) {
        this.name = name;
        this.currVelocity = 0;
    }

    speedUp(acceleration) {
        this.currVelocity += (acceleration * (1 - Spaceship.decelerationRate));
    }
}

let spaceship = new Spaceship("Leon");
spaceship.speedUp(888);
console.log(spaceship);