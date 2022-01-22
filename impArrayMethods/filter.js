// filter method
// make sure the callback functon we pass in filter function must return 
// true or false
// filter method make a new array and include only those elements
//  on which callback function return true 

// note:- filter method pass arguments in callback function
// value,index and whole array
// but its callback to decide which parameter it need
// and it takes those parameter only
// but filter(or map and forEach) always pass all three argument(i.e value,index and whole array)


const numbers = [1,3,6,8,2,9];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 ===0;
})
console.log(evenNumbers);

