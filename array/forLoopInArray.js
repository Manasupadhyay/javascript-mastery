// for loop in array

let fruits = ["mango", "banana", "grapes","papaya"];

let uppercaseArray = [];
for(let i=0; i<fruits.length; i++){
    uppercaseArray[i] = fruits[i].toUpperCase();
    console.log(fruits[i]);
    
}

for(let i=0; i<uppercaseArray.length; i++){
    console.log(uppercaseArray[i]);
}