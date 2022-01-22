// iterables
// jispe hum 'for of loop' laga sakein
// string, array are iterable

// const firstName = "Manas";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ["item1", "item2", "item3"];
// for(let item of items){
//     console.log(item);
// }


// objects are not iterable , it gives type error
// const obj = {userId:1, userName:"manas"};
// for(let item of obj){
//     console.log(item);
// }



// array like objects
// jinke pas length property hoti hai
// aur jinko hum index se access kar sakte hai
// example :- string


const firstName = "manas";
console.log(firstName.length);
console.log(firstName[3]); 
console.log(firstName[1]); 