// callback, callbackHell, pyramid of Doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


//   text       Delay           Color
//  one           1s             violet
//  two           2s            purple
//  three         2s            red
//  four          1s            pink
//  five          2s            green
//  six           3s            blue
//  seven         1s            brown

// callback Hell
// setTimeout(()=>{
//     const className = heading1.classList[0];
//     heading1.textContent = className;   
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         const className = heading2.classList[0];
//         heading2.textContent = className;   
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             const className = heading3.classList[0];
//             heading3.textContent = className;   
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 const className = heading4.classList[0];
//                 heading4.textContent = className;   
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     const className = heading5.classList[0];
//                     heading5.textContent = className;   
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         const className = heading6.classList[0];
//                         heading6.textContent = className;   
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             const className = heading7.classList[0];
//                             heading7.textContent = className;   
//                             heading7.style.color = "brown";
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000)



// now we use a function for it
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }
        else{
            if(onFailureCallback){
                onFailureCallback();
            }
            
        }
        }, time);
}


changeText(heading1,"one","violet",1000,
()=>{
    console.log("success");
    // on success call for next element
    changeText(heading2,"two","purple",2000,
    ()=>{console.log("success");
        changeText(heading3,"three","red",2000,
    ()=>{
        console.log("success");
        changeText(heading4,"four","pink",1000,
    ()=>{
        console.log("success");
        changeText(heading5,"five","green",2000,
    ()=>{
        console.log("success");
        changeText(heading6,"six","blue",3000,
    ()=>{
        console.log("success");
        changeText(heading7,"seven","brown",1000,
    ()=>{
        console.log("success");
        
    },
    ()=>{
        console.log("heading 7 doesn't exist");
    });
        
    },
    ()=>{
        console.log("heading 6 doesn't exist");
    });
        
    },
    ()=>{
        console.log("heading 5 doesn't exist");
    });
        
    },
    ()=>{
        console.log("heading 4 doesn't exist");
    });
        
    },
    ()=>{
        console.log("heading 3 doesn't exist");
    });

    },
    ()=>{
        console.log("heading 2 doesn't exist");
    });
}, 
()=>{
    console.log("heading 1 doesn't exist");
});


// we make pyramid of doom

changeText(heading1,"one","violet",1000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3,"three","red",2000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","green",2000,()=>{
                    changeText(heading6,"six","blue",3000,()=>{
                        changeText(heading7,"seven","brown",1000,()=>{
                            changeText(heading8,"eight","cyan",2000,()=>{
                                changeText(heading9,"nine","lightgray",1000,()=>{
                                    changeText(heading10,"ten","darkgreen",1000,()=>{
                            
                                    },()=>{console.log("heading 10 doesn't exist");});
                                },()=>{console.log("heading 9 doesn't exist");});
                            },()=>{console.log("heading 8 doesn't exist");});
                        },()=>{console.log("heading 7 doesn't exist");});
                    },()=>{console.log("heading 6 doesn't exist");});
                },()=>{console.log("heading 5 doesn't exist");});
            },()=>{console.log("heading 4 doesn't exist");});
        },()=>{console.log("heading 3 doesn't exist");});
    },()=>{console.log("heading 2 doesn't exist");});
},()=>{console.log("heading 1 doesn't exist");});
