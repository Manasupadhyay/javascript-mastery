// Maps
// map  is an iterable

// store data in ordered fashion

// store key value pairs (like object)
// duplicate keys are not allowed like objects


// different between maps and objects


// objects can only have strings or symbols as key

// in maps you can use anything as key
// like array, numbers, string

// object literals
// when we create object with cruly brackets

// object keys are of two type only
// key -> string 
// key -> symbol

// all the keys below are string type, even '1' is string type 
// const person1 = {
//     firstName : "manas",
//     age : 24,
//     1: "one",
// }

// Object.entries(obj) return a array of key value pair
// console.log(Object.entries(person1));
// for(let [key,value] of Object.entries(person1)){
//     console.log(key , value);
// }

// Object.keys(obj) return a array of keys only
// console.log(Object.keys(person1));


// lets see type of keys
// for(let key in person){
//     console.log(typeof key);  // string
// }

// console.log(person["age"]);
// // both are same in first 1 is converted into string
// console.log(person[1]);
// console.log(person["1"]);


// map data structure


// const person = new Map();

//  key value pair
// key of map can be any thing, string,array,number,object etc
// const arr = [1,2,3];
// const object1 = {id:1};
// person.set("firstName","Manas");
// person.set("age",24);
// person.get(1,"one");
// person.set(arr,"hello world");
// person.set(object1, "login successful");
// console.log(person.get(arr));
// console.log(person.get(object1));

// person.keys() return a map iterator, to iterate
// console.log(person.keys());

// return a array with key and value (just like Object.entries(obj))
// for(let [key] of person){
//     console.log(key);
// }

// we can use map iterator also
// for(let key of person.keys()){
//     console.log(key);
// }


// we can initialize Map() (array of arrays where each array key and value we put)
// const person2 = new Map([["id",1],["userName","Manas"],["age",24]]);
// console.log(person2);

// convert object to Map
// const obj = {
//     'id': 1,
//     'productName':"mobile",
//     'price':15000,
// }

// now convert it to Map(using Object.entries(obj))
// const newMap = new Map(Object.entries(obj));
// console.log(newMap);


// we can add some properties in object and other in a Map()
// and name key'name => object's name
const person4 = {
    id : 1,
    firstName : "Manas",
}
const person5 = {
    id:2,
    firstName : "kushagra",
}

const userInfo = new Map();
userInfo.set(person4, { gender:"male", age:24 });
userInfo.set(person5, { gender:"male", age:22 });
console.log(userInfo);

// how to access Map
const age = userInfo.get(person4).age;
console.log(age);
console.log(userInfo.get(person5).gender);