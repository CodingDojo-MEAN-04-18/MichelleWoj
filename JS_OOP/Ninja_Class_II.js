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
    this.punch = function(ninja){
        ninja.health -= 5
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health.");
        return this;
    }
    this.kick = function(ninja){
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health.");
        return this;
    }

}
var redNinja = new NinjaConstructor("michelle");
var blueNinja = new NinjaConstructor("Villain");

redNinja.sayName();
blueNinja.sayName();
redNinja.showStats();
redNinja.drinkSake();

redNinja.punch(blueNinja);
redNinja.kick(blueNinja);

redNinja.showStats();
blueNinja.showStats();