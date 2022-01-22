// default parameters

// problem
// function addTwo(a,b){
//     return a+b;
// }

// console.log(addTwo(5));  // its prints NaN
// because 2nd paramter is mising, so it take b as undefined
// and number + undefined = NaN

// to solve this issue we have two method

// before es6 method

// function addTwo(a,b){
//     // we check if a or b is undefined or not
//     // set a default value, if any one is undefined
//     if(typeof a === "undefined" ){
//         a = 1;
//     }
//     if(typeof b === "undefined"){
//         b = 1;
//     }
//         return a+b;
//     }
    
//     console.log(addTwo(5)); 


    // using default parameters

    function addTwo(a=1,b=1){
        return a + b;
    }

    console.log(addTwo(5));
