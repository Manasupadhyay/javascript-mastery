// how to get dimension of an element

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);
// DOMRect {x: 32, y: 150.1875, width: 576, height: 316, top: 150.1875, …}
// bottom: 466.1875
// height: 316
// left: 32
// right: 608
// top: 150.1875
// width: 576
// x: 32
// y: 150.1875

console.log(info.height);  // 316