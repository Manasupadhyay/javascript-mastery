// array push pop

// array unshift shift

let fruits = ["apple", "papaya", "mango", "gawava"];

// push -> add element at the last (modify original array)
console.log(fruits);
fruits.push("banana");
console.log(fruits);

// pop -> remove from the last and return the remove element
// (modify original array)

let poppedFruit = fruits.pop();
console.log(poppedFruit);


// unshift -> add element in the start (modify original array)

fruits.unshift(poppedFruit);
console.log(fruits);


// shift -> remove element from the start(modify original array)
// also return it

let shiftFruit = fruits.shift();
console.log(shiftFruit);

// push and pop are fast as compared to shift and unshift
// in push and pop we only have to remove last element from the array
// but in unshift and shift , first we have to shift all the element on 
// right side then add or delete element