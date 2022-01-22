// computed properties

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

const obj1 = {};
obj1[key1] = value1;
obj1[key2] = value2;

console.log(obj1);

// computed properties [ ]

const obj2 = {
    [key1] : value1,
    [key2] : value2
}

console.log(obj2);