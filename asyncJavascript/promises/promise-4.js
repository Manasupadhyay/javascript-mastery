// Promise.resolve
// Promise chaining

// Promise.resolve(value) => it return a promise
// const myPromise = Promise.resolve(100);

// myPromise.then((value)=>{
//     console.log(value);
// })



// note:- then() method always return a promise

function myPromise (){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}

// consume Promise
myPromise().then((value)=>{
    console.log(value);
    value +="baar";
    // internally, return Promise.resolve(value) 
    // as we see above it returns a promise
    return value;
})
.then((value)=>{
    console.log(value);
    // if we do not return any value
    // so by default , a promise return 
    // return Promise.resolve(undefined), like this
})
.then((value)=>{
    console.log(value); // undefined
})