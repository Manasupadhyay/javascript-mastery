// rest Parameters

// c variable will take rest of the parameter and form an array
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);

}
myFunc(1,2,3,4,5,6,7,8,9);


// addAll numbers

// function addAll(a=1,...b){
//     let sum = a;
//     for(let num of b){
//         sum = sum + num;
//     }
    
//     return sum;
// }

// const sum = addAll(1,2,3,4,5,6,7,8,9,10);
// console.log(sum);


// instructors soln

function addAll(...numbers){
    // check for array
    if(Array.isArray(numbers)){
        let total = 0;
        for(let number of numbers){
            total += number;
        }
        return total;
    }
    
}

const ans = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans);