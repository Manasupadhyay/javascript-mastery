// promises => promise represent future value
// promise represent a value, that we currently do not know
// but in future we get to know

console.log("script starts");
const bucket = ["coffee", "chips", "vegetables", "salt","rice"];

// it is a asynchronous task
// creating a promise
// produce a promise
// promise object has two values, {status and value}
// initially status is pending and value is unknown
const friedRicePromise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            // in resolve we can pass any value, like object,string etc
            resolve("fired Rice");
            
        }
        else{
            // in reject we can pass any value, like object,string etc
            let name = "manas";
            const func = function(){
                return function(){
                    return {name};
                }
            }
            reject(func);
        }
    },2000);
    
});


//consume promise
// browser consume the promise
// and based on the resolve or reject
// put the appropriate function in microtask queue
// i.e func1 or func2
friedRicePromise.then(
    // runs when promise is resolve(func1)
    (firedRice)=>{
    console.log(firedRice);
    },
    // runs when promise is reject(func2)
    (error)=>{
    console.log(error);
    })

    // browser put it in callback queue, after 0ms completes
    setTimeout(()=>{
        console.log("inside setTimeout!!");
        console.log(friedRicePromise);
    },0);

    for(let i=1; i<=100; i++){
        console.log(Math.random());
    }
    console.log("script ends");


    // note:- microtask queue has larger priority compared
    // to callback queue