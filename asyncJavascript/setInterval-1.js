// setInterval(cb,time) => it call callback every given time in second parameter of setInterval, but that time is minimum time it take
// maximum can be anything 

console.log("script starts !!");
setInterval(()=>{
    let total = 0;
    for(let i=0; i<100000000; i++){
        total +=i;
    }
    console.log(total);
    console.log(Math.random());
},500);
console.log("script ends !!");