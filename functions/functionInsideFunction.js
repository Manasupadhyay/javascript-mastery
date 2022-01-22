// functions inside function

// function declaration
function app(){
    // function expression
    const myfunc = function(){
        console.log("hello world");
    }
    // arrow function
    const addTwo = (num1,num2)=>{
        return num1 + num2;
    }
    const mul = (num1,num2) => num1 * num2;
    console.log("inside app");
    myfunc();
    console.log(addTwo(3,8));
    console.log(mul(5,9));
}

app();