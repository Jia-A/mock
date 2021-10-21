var input = document.querySelector("#char");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var head = document.querySelector("#head");

var arr = ["blue", "red", "yellow", "green"];
function out(){
    
    var colorLights = Math.floor(Math.random()*arr.length);
            head.style.color = `${arr[colorLights]}`;
}

start.addEventListener("click", ()=>{
    setTimeout(out, 100)
head.innerText  = input.value;
})
   
   


stop.addEventListener("click", () =>{
    head.style.color = "yellow";
})