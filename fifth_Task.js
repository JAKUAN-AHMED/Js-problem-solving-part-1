/* Generate a random number between 10 to 20. */
function getRandomNumber(min, max) {
    return parseInt((Math.random() * (max - min + 1)) + min);
}

let randomNum = getRandomNumber(10, 20);
console.log(randomNum);