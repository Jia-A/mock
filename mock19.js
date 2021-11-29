var value1 = document.querySelector("#val1");
var value2 = document.querySelector("#val2");
var btn = document.querySelectorAll(".calc");
var showDiv = document.querySelector("#show");

function clickHandler(symbol){
    var num1 = Number(value1.value);
    var num2 = Number(value2.value);
    if(symbol === "+"){
        showDiv.innerText = num1 + num2;
    }

    if(symbol === "-"){
        showDiv.innerText = num1 - num2;
    }

    if(symbol === "*"){
        showDiv.innerText = num1 * num2;
    }

    if(symbol === "/"){
        showDiv.innerText = num1 / num2;
    }
}

btn[0].addEventListener("click", () =>{
    clickHandler("+")
})
btn[1].addEventListener("click", () =>{
    clickHandler("-")
})
btn[2].addEventListener("click", () =>{
    clickHandler("*")
})
btn[3].addEventListener("click", () =>{
    clickHandler("/")
})

// Create an app which has two input fields and four buttons as +, -, *, /. You have to perform the calculation according to the button clicked and then show the output. Also make a single function for the calculation.