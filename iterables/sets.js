// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// order is not guaranteed
// unique items only (no duplicates)


// it gives error only iterables can be pass to Set(iterable)
// const numbers = new Set({key:1,userName:"MANAS"});
// console.log(numbers);


// array and string are iterables , so we can pass it in Set() constructor
// const numbers = new Set([1,2,3]);
// console.log(numbers);
// const characters = new Set("manas");
// console.log(characters);

// const items = ['item1', 'item2', 'item3'];
// // another way to create a Set
// const numbers = new Set();

// set has add() to add items
// numbers.add(1);
// numbers.add(2);
// numbers.add(items);
// numbers.add(items);// duplicate items are discarded
// numbers.add([1,2,3]);
// numbers.add([1,2,3]);// it is allow ,because memory location is different
// console.log(numbers);

// check if a number present or not
// if(numbers.has(1)){
//     console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }


// since set is iterable,
// for of loop can be use
// for(let number of numbers){
//     console.log(number);
// }

// we can use set where , we assure that , there will be no duplicate 
// Element

// or set can be use to remove duplicate from a array
let myArray = [1,2,4,4,5,6,7,5];
// convert it into set
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

// convert set into array again
myArray = [...uniqueElements];
console.log(myArray);



// calculate length of set
let length = 0;
for(let element of uniqueElements){
    length +=1;
}
console.log(length);