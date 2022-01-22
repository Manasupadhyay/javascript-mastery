// important array methods

// note:- forEach works on the existing array(i.e it does not create
// a new array)

// without forEach
// const arr = [10,12,23,14,55]

// function myFunc(number, index){
//     console.log(`index is ${index} and number ${number}`);
// }
// // to call it for each element of an array
// for(let i=0; i<arr.length; i++){
//     myFunc(arr[i],i);
// }

// using forEach
// forEach
// forEach calls,  callback function for each element of an array
// and pass argument in the callback function for each element

// const arr = [10,12,23,14,55]
// function myFunc(number, index){
//     console.log(`index is ${index} and number ${number}`);
// }
// arr.forEach(myFunc);

// another way to write it, using anonymous function
// const arr = [2,4,6,8,10];
// arr.forEach( function(number,index){
//     console.log(`index is ${index} and number ${number}`);
// })

// multiply each element of array by two
// arr.forEach( number=>{
//     console.log(`${number} * 2 = ${number * 2}`);
// })

const users = [
    {firstName : "Manas",   age : 24},
    {firstName : "pankaj",  age : 21},
    {firstName : "swapnil", age : 25},
    {firstName : "ramesh",  age : 22},
]

users.forEach((user)=>{
    console.log(user.firstName);
})

// we can also use param destructuring
// we destructure the user and take only firstName property
users.forEach(({firstName})=>{
    console.log(firstName);
})


