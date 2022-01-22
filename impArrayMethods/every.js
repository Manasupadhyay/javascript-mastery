// every method
// in every method, all element of array must satisfy the callback function condition
// if any one doesn't satisfy, every method immediately return false
// callback function of every method must return a boolean.
const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=> number%2===0);

// callback function of every method returns true or false

// for every element if callback return true
// then every method return true
// otherwise, if any element return false, then every method return false

console.log(ans);

// realistic example

const userCart = [
    {productId: 1, productName:"mobile", price: 12000},
    {productId: 2, productName:"laptop", price: 42000},
    {productId: 3, productName:"tv", price: 22000},
]


// check every product < 30000

const result = userCart.every((cartItem)=> cartItem.price<50000);
console.log(result);