// object destructuring

const anime = {
    name: "naruto",
    bestFight:"naruto vs pain",
    bestCharacter : "itachi",
    year : 1999
}

// make variables using objects keys
// general method

// const name = anime.name;
// const bestFight = anime.bestFight;
// console.log(name, bestFight);

// using destructing
// note :- names should be same as key
// const {name,bestFight} = anime;
// console.log(name,bestFight);

// but we can change them, using alias(:)

// const {name : var1, bestFight :var2} = anime;
// console.log(var1,var2); 


// make some of rest parameters a new object

const {name,bestCharacter,...rest} = anime;
console.log(name,bestCharacter,rest);