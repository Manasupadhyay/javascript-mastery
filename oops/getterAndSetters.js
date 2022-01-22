// getters and setters

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // fullName() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
    // using getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // setName(firstName, lastName){
    // this.firstName = firstName;
    // this.lastName = lastName;
    // }

    // using setter
    set fullName(fullName){
        function removeSpace (element){
            return element !== "";
         }
        //  console.log(fullName.split(" ").filter(removeSpace));
        const [firstName,lastName] = fullName.split(" ").filter(removeSpace);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("manas", "upadhyay",24);
console.log(person1);
// console.log(person1.fullName());
// we want to use fullName function as a property without using brackets
// like this person1.fullName
// to do this
// we use getter setters
console.log(person1.fullName);

// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("kushagra","upadhyay");
// console.log(person1.firstName)
// console.log(person1.lastName)

// we want to use like this
// person1.setName = "kushagra upadhyay";
// firstName goes to kushagra and lastName goes to upadhyay
// for this we use setter 
// now if we use like this

person1.fullName = "kushagra     upadhyay";
console.log(person1.fullName);