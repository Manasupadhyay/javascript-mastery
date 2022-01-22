// change Text

// textContent  and innerText
// textContent property ignore css styles
// whereas innerText doesn't ignore them

// chnage main Heading
const mainHeading = document.querySelector("#main-heading");

// it display span tag also, but we add display to none
console.log(mainHeading.textContent); // Manage Your Task manas



// using innerText
// it does not display span tag
console.log(mainHeading.innerText);  // Manage Your Task
 