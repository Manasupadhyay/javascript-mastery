"use strict";
// strict mode avoid us to make mistakes
// help us to understand errors better

// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable

var firstName = "Manas";

// use  a variable

console.log(firstName);

// change a variable

firstName = "kushagra";

// again console.log to see change

console.log(firstName);

// note:- variable declare with var , can also redeclare with the same name, in case of var only.
// ex.  var name = "manas"
// var name = "kushagra"
// redeclare the same variable, right in case of var only

// in javascript, we can create variable without var,let or const
// ex.


userName = "manas";
console.log(userName); // manas

// but this behaviour is harmful
// if by mistake we change u to U , now we have two variables
// userName amd UserName

UserName = "name";

// we change the value but still , same value is printing
// because a new variable is created, Username.

console.log(userName); // manas

// to restrict this behaviour,
// to force the use var , let or const to create a variable
// we use strict mode


