class Ninja {
    constructor (name, health, speed, attackPower) {
        this.name = name;
        this.health = 100;
        this.speed = 15;
        this.attackPower = 25;
    }
    // Médotos
    sayName() {
        console.log (this.name + "!!!!");
    }
    showStats() {
        console.log("---" + this.name + " STATS ---");
        console.log(this.health + " health points");
        console.log(this.speed + " speed points");
        console.log(this.attackPower + " attack power");
    }
    drinkSake() {
        this.health += 10;
        console.log(this.name + " drank a bottle full of sake!!!! :DD");
    }
}
// Clase Sensei
class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.health = 100;
        this.attackPower = 50;
        this.speed = 60;
        this.wisdom = 10;
    }

    // Métodos
    speakWisdom () {
        this.wisdom += 10;
        console.log(this.name + " started a long speech about life and death...");
    }
    showStats() {
        super.showStats()
        console.log(this.wisdom + " wisdom");
    }

}


// Crear instancia Ninja padre
const ninja1 = new Ninja ("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();

// Crear instancia Sensei hijo
const superSensei = new Sensei("Master Splinter", 90, 10, 50);
superSensei.showStats();
superSensei.drinkSake();
superSensei.speakWisdom();
superSensei.showStats();
