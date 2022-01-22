// super (use to access parent's constructor)


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
    // using name and age from parent's constructor 
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return ` ${this.name} is running at ${this.speed}kmph`;
    }

}

const dog1 = new Dog("tommy",4,45);
console.log(dog1);
console.log(dog1.run());
