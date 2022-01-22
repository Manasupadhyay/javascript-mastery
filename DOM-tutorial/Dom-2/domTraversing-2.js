// now if we want to see only child of html element and ignore the text nodes
// we use children property

const container = document.querySelector(".container");
console.log(container);

console.log(container.childNodes);  // NodeList(5) [text, h1, text, p, text]

console.log(container.children);  // HTMLCollection(2) [h1, p]