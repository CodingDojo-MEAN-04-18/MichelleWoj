module.exports = function (){
    return {
        //add two numbers (e.g. math.add(2,3) should return 5)
        add: function(num1, num2) {
            console.log(num1+num2);
        },
        //multiply two numbers (e.g. math.multiply(3,5) should return 15)
        multiply: function (num1, num2) {
            console.log(num1*num2);
        },
        //square a number (e.g. math.square(5) should return 25)
        square: function(num1) {
            console.log(num1*num1);
        },
        //return a random number between the two numbers. (e.g. math.random(1,35) should return a random number between 1 and 35)
        random: function (num1, num2) {
            var solution = Math.floor(Math.random()*num2);
            console.log(solution);
            return solution;
        }
    }
};