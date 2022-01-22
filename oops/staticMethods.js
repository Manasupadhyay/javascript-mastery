// static methods and properties
// static methods and properties are directly related to class
// and is not related to  objects
// we can access them using class name
// and with object we cannot access them
// also called they are class methods and properties

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // static methods and properties
    static classInfo(){
        return 'This is '+ Person.className + ' class';
    }
    static className = "Person";

    // using getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    

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


const person1 = new Person("manas","upadhyay",24);
// it gives error as we cannot access static methods
// using objects 
// console.log(person1.classInfo());
// to access them, we have to use class name
console.log(Person.classInfo()); // works fine 
console.log(Person.className);