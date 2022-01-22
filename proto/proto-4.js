
//1
// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = {
//     key3 : "value3",
// }

// console.log(obj2.key3); // value3
// console.log(obj2.key1);  // undefined

// we want javascript to do,
// if key is not present is obj2
// then it search in obj1 ,

// we want to add this functionality

// there is one more way to create a empty object

// const obj3 = {}; // it has [[prototype]] as object
// console.log(obj3);
// const obj2 = Object.create(null);  // it has nothing
// console.log(obj2);


//2

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// // but we can pass a object in it 
// by doing below this, we set __proto__ of obj2 to obj1
// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";

// // by doing this , we have that functionality

// console.log(obj2.key3); // value2
// console.log(obj2.key1); // value1

// now  obj2 doesn't have key1, so instead to giving undefined
// it search in obj1


// 3
const obj1 = {
    key1 : "value1",
    key2 : "value2",
}

// but we can pass a object in it 
const obj2 = Object.create(obj1);
obj2.key3 = "value3";
obj2.key1 = "unique";
// by doing this , we have that functionality

console.log(obj2.key3); // value2
// it search in obj2 first as it finds key1 there so it do not search in obj1
console.log(obj2.key1); // unique
console.log(obj2.__proto__);


// 4
// __proto__ 
// offical ecmascript documentation name __proto__ as
// [[prototype]]
// so both are same , __proto__ and [[prototype]]

// but 'prototype' is different thing


