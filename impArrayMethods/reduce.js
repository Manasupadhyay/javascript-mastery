// reduce method

// reduce method return a single value

const numbers = [1,2,3,4,5];
// sum of all numbers

// initial value of acculmulator is the numbers array first index value
// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// })
 
// console.log(sum);

//  accumulator       currentValue    return
//     1                   2             3
//     3                   3             6
//     6                   4             10
//     10                  5             15


// we can change accumulator initial value

// in reduce method , first parameter is callback function
// and second parameter is accumulator initial value
// and now current value starts from index 0
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},20)
 
console.log(sum);

// accumulator         currentValue      return
//   20                     1               21
//   21                     2               23
//   23                     3               26
//   26                     4               30
//   30                     5               35


// real world exmaple
// add items in shopping cart

const userCart = [
    {productId: 1, productName:"mobile", price: 18500},
    {productId: 2, productName:"laptop", price: 35000},
    {productId: 3, productName:"tv", price: 58500},
]

const totalAmount = userCart.reduce((cartAmount,currentProduct)=>{
   
    return cartAmount + currentProduct.price;
},0)

console.log(totalAmount);

// cartAmount          currentPrice           return
//    0                 18500                  18500
//    18500             35000                  53500
//    53500             58500                  112000