// sort method

// sort method changes the existing array
// return reference of the same array
// sort method sort in terms of acsii value
// ascii code
// 0     48
// 1     49
// 2     50
// 3     51
// 4     52
// 5     53
// 6     54
// 7     55
// 8     56
// 9     57

// const numbers = [4,7,12,9,1];
// console.log(numbers.sort());  // [1, 12, 4, 7, 9]

//  to make sort method , sort numbers
// we have to pass a callback function

// const numbers = [4,7,12,9,1];
// numbers.sort((a,b)=>{
//     return a - b;
// })
// console.log(numbers);  // [1, 4, 7, 9, 12]

// a = 12, b= 9
// a - b (if greater than 0 then swap position of a and b)
// a - b (if less than or equal to 0 then not swap position)
// 12 - 9 >0
// then sort function swap position of 12 and 9

const numbers = [4, 7, 12, 9, 1];

// numbers.sort((a,b)=>{

//     return a - b;
// })
// console.log(numbers);

// sort in decreasing order

// numbers.sort((a,b)=>{
//     return b - a;
// })
// console.log(numbers);

// clone the array to prevent from modify original array
// here we use slice() to clone array

// const newNumbers = numbers.slice(0).sort((a,b)=>{
//     return a - b;
// });

// we can also use spread operator to clone array
const newNumbers = [...numbers].sort((a, b) => {
  return a - b;
});

console.log(numbers);
console.log(newNumbers);

// sort the products,
// low to high and high to low

const products = [
  { productId: 1, productName: "mobile", price: 15000 },
  { productId: 2, productName: "laptop", price: 65000 },
  { productId: 3, productName: "tv", price: 45000 },
  { productId: 4, productName: "earphones", price: 1000 },
  { productId: 5, productName: "powerbank", price: 2000 },
];

// sort low to high

const lowToHigh1 = [...products].sort((product1, product2) => {
  return product1.price - product2.price;
});

console.log(lowToHigh1);

// sort high to low

const highToLow = products.slice(0).sort((product1, product2) => {
  return product2.price - product1.price;
});

console.log(highToLow);

// using param destructrucing

const lowToHigh2 = products
  .slice(0)
  .sort(({ price: price1 }, { price: price2 }) => {
    return price1 - price2;
  });
console.log(lowToHigh2);
