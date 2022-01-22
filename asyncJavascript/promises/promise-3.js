// promise  && setTimeout


// i want to resolve / reject promise after 2 seconds

function myPromise(){
    return new Promise((resolve, reject)=>{
        let value = false;
        setTimeout(()=>{
            if(value){
                resolve("resolve");
            }
            else{
                reject("reject");
            }
            
        },2000)

    })
}

myPromise().then((data)=>{
console.log(data)
},
(error)=>{
console.log(error);
})