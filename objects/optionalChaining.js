// optional chaining (.?)

// it checks the current key is undefined or not
// if undefined it return undefined and stop 

// we use optional chaining to avoid error
// error occur when we access a property from undefined

const obj = {
 firstName : "Manas",
//  address : {houseNumber : '1678'},
}

// if keys are present it works fine
// console.log(obj.firstName);
// console.log(obj.address.houseNumber);

// if keys are not present , and we access keys properties
// then it gives error
// i.e we access , a property from undefined 
// let uncomment address
// then try to access houseNumber

// console.log(obj.address.houseNumber); // gives error

// to avoid such error 
// we use optional chaining

console.log(obj?.address?.houseNumber);  // it gives undefined

// in optional chaining it check the current key is undefined or not
// if its undefined , it stops, and return undefined
// in above example,
// obj has key value pair so it moves right
// but obj.address doesn't exist, i.e it is undefined
// so it stops there and return undefined


