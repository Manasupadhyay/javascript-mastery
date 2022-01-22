// splice method
// start , delete , insert

// splice method modify the existing array

const myArray = ["item1", "item2", "item3"];

// delete (splice return deleted elements array)
const deletedItems = myArray.splice(1,1);
console.log(myArray);
console.log(deletedItems);

// insert 

myArray.splice(1,0,"item4");
console.log(myArray);


// insert and delete together
myArray.splice(1,2,"item6","item7");
console.log(myArray);

// we can replace a item with another using splice(i.e update value)
myArray.splice(1,1,"updated-item");
console.log(myArray);

