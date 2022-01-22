// for in loop (give index)

const fruits = ["papaya","mango", "pineapple",'orange'];
const fruits2 = [];
// give index
for(let index in fruits){
    console.log(fruits[index]);
    
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);