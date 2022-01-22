// event Object

const firstBtn = document.querySelector("#one");
firstBtn.addEventListener("click", function(event){
    console.log(event);
})


// js engine --- line by line execute karta he
// browser --- js Engine + extra features 
// browser --- js Engine + WebApi

// jab bhi mai kisi bhi element pe event listener add karuga
// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
// browser 2 kaam karta he--
// 1) callback function hai vo js engine ko degi ...
// 2) callback function ke sath browser jo event hua hai uski  information bhi dega
// ye info hamein ek object ke form mai milegi

// example
function hello(abc){
    console.log(abc);
}

// browser pass event object just like this
hello({firstKey : "value1", secondKey:"value2"});


// add event listener to all buttons

const allBtn = document.querySelectorAll("button");
console.log(allBtn);
allBtn.forEach((btn)=>{
    btn.addEventListener("click", function(event){
        console.log(event.currentTarget);
    })
})


// target and currentTarget
// target -> element which trigger the event
// currentTarget -> element on which event listener is attach