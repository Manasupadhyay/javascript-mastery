// some method
// return true or false

// if any one element satisfy the callback condition,
// then some method return true


// even number example
//  kya ek bhi even number he isme, agar he to return true aayega

const numbers = [5,9,3,12];
// some method return true or false
const ans = numbers.some((number)=> number%2===0);
console.log(ans);

// find method return value, if not found , undefined
const find = numbers.find((number)=> number%2==0);
console.log(find);

// check if any cart element exceeds 100000
const userCart = [
    {productId: 1, productName:"mobile", price: 12000},
    {productId: 2, productName:"laptop", price: 42000},
    {productId: 3, productName:"tv", price: 22000},
    {productId: 4, productName:"macbook", price: 225000},
]

const result = userCart.some( (cartItem) => cartItem.price >100000 )
console.log(result);