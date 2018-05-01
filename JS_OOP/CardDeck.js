class Deck {
    constructor(){
        this.deck = [];
    }
    shuffle(){
        let x = this.deck.length, t, i;
        while (x) {
            i = Math.floor(Math.random() * x--);
            t = this.deck[x];
            this.deck[x] = this.deck[i];
            this.deck[i] = t;
        }
    return this;
    }
    reset(){
        this.deck = [];
        const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        const numbers = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for (let suit of suits) {
            for (let number of numbers) {
                this.deck.push(number + " of " + suit);
            }
        }
        return this;
    }
    dealRandom(){
        return this.deck.pop();
    }

}
class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    takeCard(deck){
        this.hand.push(deck.dealRandom());
        return this;
    }
    discard(){
        this.hand.pop();
        return this;
    }
}

const deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

const player1 = new Player("Michelle");
player1.takeCard(deck1);
console.log(player1);
console.log(deck1);