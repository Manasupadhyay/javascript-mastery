// callback function

// passing a function func1 in another function func2,
// now its function func2 responsibility to call
// that function func1

// a function we take as a input
// in a another function and call it inside that.

function func1(name){
    console.log("inside func1");
    console.log(`hello my name is ${name}`);
}

function func2(callback){
    console.log("inside func2");
    callback("manas");
}

func2(func1);