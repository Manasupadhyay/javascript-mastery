// || and && operator

// and or operators are used when need to check more than one condition

let firstName = "Manas";
let age = 18;

// checking single condition
// if(firstName[0] === "M"){
//     console.log("You name start with M");
// }
// else{
//     console.log("something wrong here");
// }

// if(age >=18){
//     console.log("you are 18 ");
// }


// checking multiple condition
// using && operator
// gives true if both condition are true
if(firstName[0] === "M" && age >=18){
    console.log("Name start with M and age is 18 or above");

}

// using || operator
// gives true if any one condtion is true
if(firstName[0]==="M" || age >18){
    console.log("name start with M and age is 18 or above");
}


