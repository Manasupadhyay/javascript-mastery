// create a class Animal

class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    eat(){
        return `${this.name} is eating...`;
    }

    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}


const animal1 = new Animal("tom",2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());
console.log(animal1.isCute());


// now we create a Dog class

class Dog extends Animal{

}
// all properties of Animal now accessible to Dog
// here Dog class doesn't have constructor
// so javascript search in base class for constructor
// and there it find
const dog1 = new Dog("rocket",2);
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.isCute());