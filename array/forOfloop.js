// for of loop(access element of array or any iterable)

const fruits = ["papaya","mango", "pineapple",'orange'];
const fruits2 = [];
for(let fruit of fruits){
    console.log(fruit);
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);