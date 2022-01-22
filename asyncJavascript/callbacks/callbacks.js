// understanding callbacks

// example 1
// function myfunc1(callback){
//     console.log("task 1");
//     callback();
// }
// function myfunc2()
// {
//     console.log("task 2");
// }

// myfunc1(myfunc2);


// example 2

// function getTwoNumbersAndAdd(num1,num2,callback){
//     console.log(num1,num2);
//     callback(num1, num2);
// }

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// getTwoNumbersAndAdd(2,6,addTwoNumbers);


// example 3 
// we can use it to check input first
// function getTwoNumbersAndAdd(num1, num2, callback){
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         callback(num1, num2);
//     }
//     else{
//         console.log("wrong data type, pass number only!!");
//     }
    
// }

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// getTwoNumbersAndAdd("2",6,addTwoNumbers);  // wrong type, pass number only!!
// getTwoNumbersAndAdd(2,6,addTwoNumbers);  // 8


// example 4
// sometimes we pass two callbacks, one for success and other for error
function getTwoNumbersAndAdd(num1, num2, onSuccess, onFailure){
    if(typeof num1 === "number" && typeof num2 === "number"){
        onSuccess(num1, num2);
    }
    else{
        onFailure();
    }
    
}

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
function onFail(){
    console.log("enter right data type");
    console.log("pass  number only!~");
}

getTwoNumbersAndAdd("2", 6, addTwoNumbers, onFail);  // enter right data type pass  number only!~
getTwoNumbersAndAdd(2, 6, addTwoNumbers, onFail);  // 8
