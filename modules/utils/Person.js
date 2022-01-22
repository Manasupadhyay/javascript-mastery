
 class Person {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getInfo(){
        console.log(this.fname,this.lname,this.age);
    }
}

 class Person2 {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getInfo(){
        console.log(this.fname,this.lname,this.age);
    }
}

const yo = "yo yo yo";
export default Person;
export {Person2,yo};