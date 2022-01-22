// spread Operator
const array1 = [1,2,3];
const array2 = [4,5,6];

// spread operator in array
const clonearray = [...array1,...array2,7,8];
console.log(clonearray);
// spread a string
const newString1 = [..."manas"];
const newString2 = [..."123456789"];
console.log(newString1);
console.log(newString2);

// spread operator in Objects

// note: keys in object are unique,
// if key comes more than one time, last one overrides 
// others(same keys)

const obj1 = {
    key1 : "manas",
    key2 : "kushgara",
    key1 : "upadhyay"
}
// last key1 overrides intial one
console.log(obj1);

// another example

const obj2 = {
    key1 : "value1",
    key2  : "value2"
}

const obj3 = {
    key1: "uniquevalue",
    key3 : "value3",
    key4  : "value4"
}
// clone a object
const newObj1 = {...obj2};
console.log(newObj1);
console.log(newObj1 === obj2); // both take different address


// here you notice, last key1 overrides the other key1
// if we change order of obj2 and obj3, then last key1
// override the other key1
const newObj2 = {...obj2 , ...obj3};
console.log(newObj2);

// add a new keys along the way
const newObj3 = {...obj2 , ...obj3 , key7 : "manas"};
console.log(newObj3);

// separate other iterables
// iterables are those, which we can iterate(apply loop on(like for loop, while loop))

// string to object
const stringObj = {..."manas"};
// index become keys
console.log(stringObj);

// array to object
const arrayObj = {...["item1","item2","item3"]};
// index become keys
console.log(arrayObj);


// if we want alphabets position
const alphabetsObj = {..."abcdefghijklmnopqrstuvwxyz"}; 
console.log(alphabetsObj);
console.log(alphabetsObj["19"]); // t