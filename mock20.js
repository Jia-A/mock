var input =document.querySelector("#inp");
var number =document.querySelector("#enter");
var reverseBtn =document.querySelector("#rev");
var randomBtn =document.querySelector("#random");
var dark =document.querySelector("#black");
var show =document.querySelector("#show");
var result =document.querySelector("#win");
var color =document.querySelector("#color");

reverseBtn.addEventListener("click", ()=>{
    var newVal = input.value.split("").reverse().join("");
    show.innerText = newVal;
})

dark.addEventListener("click", ()=>{
    color.style.backgroundColor = "gray";
})

randomBtn.addEventListener("click", ()=>{
    var rand = Math.floor(Math.random() *10);
    var num = Number(number.value);
    if(rand === num){
        result.innerText = "Yep, guessed it right!";
    }
    else{
        result.innerText = "Nahh, wrong guess!";
    }
})

