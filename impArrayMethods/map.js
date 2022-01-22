// map method
// it makes a new array
// callback function pass in map must return sometimes
// otherwise undefined is return 

// note := if we do not return anything , function return undefined
//  by default



// const numbers = [2,4,6,8,10];

// function square(number){
//     return number * number;
// }
// const squareNumbers = numbers.map(square);
// console.log(squareNumbers);

// note: if we do not pass a callback function that return something
// then the new array return by map will contain
// undefined in all indexes

// see
// const numbers = [2,4,6,8,10];

// function square(number){
//     console.log(number * number);
// }
// const squareNumbers = numbers.map(square);
// console.log(squareNumbers); // this array contain undefined in all indexes


// so keep in mind while using map
// you must pass a callback that return something


// use map method to store username in a array
const users = [
    {firstName : "Manas", age : 24},
    {firstName : "pankaj", age : 21},
    {firstName : "swapnil", age : 25},
    {firstName : "ramesh", age : 22},
]

// const firstNames = users.map(({firstName})=>{
// return firstName;
// });

// another way
const firstNames = users.map((user)=>{
    return user.firstName;
    });
    
console.log(firstNames);