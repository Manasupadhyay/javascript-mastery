// arrow function

const sayHappyBirthday =  () =>{
    console.log("happy birthday to you ....");
}

sayHappyBirthday();


const sumOfTwo = (num1,num2) =>{
    return num1 + num2;
}
console.log(sumOfTwo(5,9));

// if parameter is only one , we can remove brackets also
// also if there is only one statement , then we remove brackets and
// return keyword also

const checkEvenOdd = num => num%2 === 0;
console.log(checkEvenOdd(5)); // false


const findElement = (arr,target) =>{
    for(let i=0; i<arr.length; i++){
            if(target === arr[i]){
                    return i;
                 }
                
             }
             return -1;
}

const arr1 = [1,2,3,5,6,8,9];
const target = 5;
const pos = findElement(arr1,target);
console.log("index at "+ pos);