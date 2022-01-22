const callMe = ()=>{
    let count = 0;
    return ()=>{
        count++;
        if(count === 1){
            console.log("hi , you called Me !!");
        }
        else{
            console.log("ma ek baar call ho chuga hu");
        }
    }
}


const myFunc1 = callMe();
myFunc1();
myFunc1();
myFunc1();


const myFunc2 = callMe();
myFunc2();
myFunc2();
myFunc2();