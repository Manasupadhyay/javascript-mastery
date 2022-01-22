// Dom Tree
const rootNode = document.getRootNode();
// console.log(rootNode);

// find child of an element ( using childNodes property) 
const htmlELementNode = rootNode.childNodes[0];  // javascript object
// console.log(htmlELementNode);  // html representation
// console.dir(htmlELementNode)   // javascript object

// see html child nodes
// console.log(htmlELementNode.childNodes);  // NodeList(3) [head, text, body]

// access head element

const headElementNode = htmlELementNode.childNodes[0];
// console.log(headElementNode);

const textNode1 = htmlELementNode.childNodes[1];
// console.log(textNode1);

const bodyELementNode = htmlELementNode.childNodes[2];
// console.log(bodyELementNode); 

// find parent of an node ( using parentNode property)
// console.log(headElementNode.parentNode);


// find sibling of an element

// console.log(headElementNode.nextSibling);  // textNode

// to display only html elements we can use, 
// nextElementSibling property

// console.log(headElementNode.nextElementSibling);  // body

// select h1 and get to its parent and change text color and background color

// const h1 = document.querySelector("h1");
// console.log(h1);
// const h1Parent = h1.parentNode;
// const body = h1Parent.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";


// access body element directly

const body = document.body;
console.log(body);

// access head element
const head = document.querySelector("head");
console.log(head);

// we can search in any element
// now search in head, for title element
const title = head.querySelector('title');
console.log(title.childNodes);


