// function is like a servant , which do a task for us,
// that we define for it
// function are very loyal, they do exactly what we want
// also we can call them as many times we want
// we make a function , when we have to do same task again and again,
// we put that task inside a function
// and call whenver we want


// make a servant, that wish you happy birthday to you
// call , invoke , run same meaning in function

// function sayHappyBirthday(){
//     console.log("happy birthday to you ....");
// }

function sayHappyBirthday() {
    console.log("happy birthday to you ....");
}
// now we call servant
sayHappyBirthday();
sayHappyBirthday();
sayHappyBirthday();

// convert undefined to string
// console.log( undefined + "manas" );
// console.log( undefined + 1 ); // NaN

// sum function
// function declartion
// function addition(num1, num2){
//     return num1 + num2;
// }
// const sum = addition(12,45);
// console.log(sum);  // 57


// function expression, assign function to a variable
const sumOfTwo = function(num1,num2){
    return num1 + num2;
}
console.log(sumOfTwo(5,9)); // 14


// odd or even

// function checkEvenOdd(num){
//     return num%2 ? "odd" : "even";
// }

const checkEvenOdd = function (num){
    return num%2 === 0; // return true or false
}

console.log(checkEvenOdd(5));  // odd


// function return first character of string

// function firstCharacter(str){
//     return str[0];
// }

const firstCharacter = function(str){
    return str[0];
}

console.log(firstCharacter("manas"));  // m


// function to find a element in a array

// function findElement(arr,target){
//     for(let i=0; i<arr.length; i++){
//         if(target === arr[i]){
//             return i;
//         }
        
//     }
////  this runs when element does not found
//     return -1;
// }

const findElement = function(arr,target){
    for(let i=0; i<arr.length; i++){
            if(target === arr[i]){
                    return i;
                 }
                
             }
             return -1;
}

const arr1 = [1,2,3,5,6,8,9];
const target = 5;
const pos = findElement(arr1,target);
console.log("index at "+ pos);
