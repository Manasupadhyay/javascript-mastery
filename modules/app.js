import {firstName as fname} from './utils/fname.js'
import myAge from './utils/age.js'
import Person, {Person2 , yo} from './utils/Person.js'

console.log(fname,myAge);
const person = new Person("manas","upadhyay",24);
console.log(person);
person.getInfo();
console.log(yo);


// note:=
// default export => there is only one default export in a file
// when we import a default export , we can change its name(i.e it is not necessary to have same name as it declared with)
// in default export we did not use curly brackets
// exmaple ;- import age from './utils/age.js'
// name export => there can be multiple name export in a file
// in name export we use curly brackets 
// when we import from name export, its name should be same as it was declare with, but we change it using ( as )
// example: import {firstName as fname} from './utils/fname.js  