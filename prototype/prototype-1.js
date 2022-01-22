// prototype
// javascript functions behave, as function as well as objects
// javascript functions = function + object
// we can use them as objects also


// note :> 'prototype' property har function ke sath free milti he :)
// treat it like a empty object, give to every function
function hello(){
    console.log("hello how are you?");
}

// use as object, access hello property name
console.log(hello.name);  // hello

// we can add our own property also
hello.myOwnProperty = "Manas :)";

// access my property :)
console.log(hello.myOwnProperty);  // Manas :)


// note :-> when we create a function, javascript provide us, free space in that
// function (i.e a empty object {});
// here we calling empty object as free space
// that's name is 'prototype'

console.log(hello.prototype); // it only contain a constructor property

// every function has prototype property
// and only function has that, no other has it

// check if prototype present he ya nhi

function checkForPrototype(name){
    if(name.prototype){
        console.log('prototype present hai');
    }
    else{
        console.log("prototype present nhi he");
    }
    
}
checkForPrototype(hello); // prototype present hai

// now check with array and objects

const obj = {
    "userName": "manas"
};
const arr = [1,2,3,4];

checkForPrototype(obj); // prototype present nhi he
checkForPrototype(arr); // prototype present nhi he


// we can add properties in prototype object
hello.prototype.name = "hello";
hello.prototype.age = "abhi banaya he";
hello.prototype.call = function(){
    return "call kar diya :)";
}

// now use these properties
console.log(hello.prototype.name);
console.log(hello.prototype.age);
console.log(hello.prototype.call());
