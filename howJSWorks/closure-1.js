
// closures

// function myFunction(power){
//     let arr = [];
//     let count = 0;

//     arr.push(power); 
//      function pow(num){
//          count++;
//          arr.push(num);
//          console.log(arr);
//          console.log("no of times function called =>  " + count);
//         return num ** power;
//      }
//      return pow;
// } 

// const square = myFunction(2);
// console.log(square(4));
// console.log(square(10));
// console.log(square(3));

// const cube = myFunction(3);
// console.log(cube(5));
// console.log(cube(10));
// console.log(cube(5));


// make it short, using arrow function

const myFunction = (power) => (num) => num ** power;

const square = myFunction(2);
console.log(square(4));

const cube = myFunction(3);
console.log(cube(3));