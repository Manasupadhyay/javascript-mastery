// Nested if else

// Guess a number

// exmaple
// 25 wining number 
//  17 too low
// 29 too high

let winingNumber = 25;
let guess;
// add + to convert string to number
guess = +prompt("Guess a Number");
if(guess === winingNumber){
    console.log("you guess is right");
}
else{
    if(guess > winingNumber){
        console.log("guess is too high");
    }
    else{
        console.log("guess is too low");
    }
}