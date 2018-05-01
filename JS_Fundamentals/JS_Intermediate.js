//Part 1 - Takes a # and returns a string of *'s.
function starString(num) {
    let string = "";
    for (let i = 0; i < num; i++) {
        string += "*";
    }
    return string
};

let stars = starString(8);
console.log(stars);

//Part 2 - Takes an array of #'s and print out *'s on lines
function drawStars(arr){
    for (let i = 0; i < arr.length; i++) {
        let star = "";
         for (let p = 0; p< arr[i]; p++) {
             star += "*" }
        console.log(star)}
}

let x = drawStars([4,6,1,3,5,7,25]);
console.log(x);

//Part 3 - accepts an array. If a #, then print that # of *'s. If a string, 
//then print the first letter of the string the number of letters in the string.

function drawStars(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result.push(starString(arr[i]))
        } 
        else if (typeof arr[i] === 'string') {
            let string = "";
            for (let j = 0; j < arr[i].length; j++) {
                string += arr[i][0].toLowerCase();
            }
            result.push(string);
        }
    }
    return result;
};

const y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
let test3 = drawStars(y);
console.log(test3);
