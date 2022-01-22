// find method

// find method return first occurence of that we want to find if 
// not found return undefined

const myArray = ["manas","goku","naruto","gojo","jogo"];

// we have to find the first occurence of string with length 4

// defining callback function
function findLength4(str){
    return str.length === 4;
}

// apply find method in myArray
const string = myArray.find(findLength4);
console.log(string);  // goku


// real world example 
// find a user

const users = [
    {userId:1, userName:"manas"},
    {userId:2, userName:"swapnil"},
    {userId:3, userName:"pankaj"},
    {userId:4, userName:"puspendra"},
    {userId:5, userName:"sourabh"},
];

// const user = users.find((user)=>{
//     return user.userId === 3;
// })

// console.log(user);

// another way
// to use destructing , use round brackets
const user = users.find( ({userId}) => userId===3)
console.log(user);