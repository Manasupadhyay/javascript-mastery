// fill method
// value , start, end(does't include)

// fill method modify existing array
// it is use if we have to insert a value continously (in a range)
 // return the refernece of existing array
// let say we have to make a array of size 10 and have all element -1

const myArray = new Array(10).fill(-1);
console.log(myArray);

// make array , and put zero in a range
const numbers = [1,2,3,4,5,6,7,8,9];
const num = numbers.fill(0,2,6); // return the existing array reference
console.log(numbers); 
console.log(num); 