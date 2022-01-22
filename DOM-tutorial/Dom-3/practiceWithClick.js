// little practice with click event

// change background color to yellow and color to gray, on clicking the button

const allBtn = document.querySelectorAll(".my-buttons button");
allBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        // btn === e.currentTarget // it represent button object
        e.currentTarget.style.backgroundColor = "yellow";
        e.currentTarget.style.color = "gray";
    })
})