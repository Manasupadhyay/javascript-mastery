// lexical Scope or environment
// where a particular function, or variable is defined is called there lexical environment
// example function f1 inside a function f2
// so lexical environment of f1 is f2 

// note:=> we can say, scope of a function or variable, where it is accessible,
// is lexical scope or environment


// example

// lexical scope of myFunc is myApp
// and lexical scope of myApp is whole file
// if myFunc does not have myVar, then it search in its lexical scope
// there also it doesn't find, then it search in its parent's lexical scope and soo on, until it find myVar
// or it find null(after global scope ) :) 

// function myApp(){
//     const myVar = "value1";
//     function myFunc(){
//         // const myVar = "value59";
//         console.log("inside myFunc " + myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }

// myApp();


// example

// here first it search in myFunc then its lexical scope
// but there is no myVar
// then it farther it search in its parent lexical scope(i.e global scope, here)
// there it find myVar :)
// const myVar = "value1";
// function myApp(){
    
//     function myFunc(){
//         // const myVar = "value59";
//         console.log("inside myFunc " + myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }

// myApp();


// another example
// lexical scope where a function or variable is accessible

const myVar = "value1";

 // lexical scope of myApp
function myApp(){
     // lexical scope of myFunc
    function myFunc(){
        // lexical scope of myFunc2
        function myFunc2(){
            console.log("inside myFunc2 "+myVar);
        }
        myFunc2(); //(3)
    }
    console.log(myVar);

    myFunc(); //(2)
}

myApp(); // start from here (1)

// on the above code
// myFunc2 first search in its body, then in its lexical scope then its parent lexical
// scope then its parent's parent lexical scope i.e global scope
// where it find myVar. 