function NinjaConstructor(name, health, speed, strength) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    this.sayName = function() {
        console.log("This ninja is named " + this.name);
        return this;
    }
    this.showStats = function() {
        console.log("Strength: "+ this.strength+ " and Speed: "+ this.speed);
        return this;
    }
    this.drinkSake = function() {
        this.health +=10
        console.log("Health: "+ this.health);
        return this;
    }

}
var michelle = new NinjaConstructor("michelle");

michelle.sayName();
michelle.showStats();
michelle.drinkSake();
 


