// nested Destructuring

const users = [ 
    {userId:"1",firstName:"Manas",gender:"male"},
    {userId:"2",firstName:"kushagra",gender:"male"},
    {userId:"3",firstName:"manisha",gender:"female"},
    ];


    // destructuring array
    const [user1,user2,user3] = users;
    console.log(user1);
    console.log(user2);
    console.log(user3);

    // destructure individual object properties
    // const [{firstName}, , {gender}] = users;
    // console.log(firstName,gender);

    // also add alias
    const [{firstName : name}, , {gender: gen}] = users;
    console.log(name,gen);