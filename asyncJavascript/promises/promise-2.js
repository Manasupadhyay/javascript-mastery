// returning a promise from a function

function ricePromise(){
    const bucket = ["coffee", "chips", "vegetables", "salt","rice"];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("salt") && bucket.includes("vegetables") && bucket.includes("rice")){
            resolve("fried rice");
        }
        else{
            reject("not able to make!!");
        }
    })
}


// consuming promise

ricePromise().then((friedRice)=>{
    console.log(friedRice);
},
(error)=>{
console.log(error)
})