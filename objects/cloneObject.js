// clone using Object.assign

const obj = {
    key1 : "value1",
    key2 : "value2",
}

// clone using spread operator
const clonedObject = {...obj};
console.log(clonedObject);
// check if they are equal or not
console.log(obj === clonedObject); // false


// cloning using Object.assign({},obj)
// first parameter is an empty object
// second is the object we want its value to copy
// Object.assign(), fill the empty object with key value pair
// from second parameter 
// before spread operator we use this
const newObj = Object.assign({},obj); 
console.log(newObj);