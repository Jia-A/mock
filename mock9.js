var input = document.querySelector("#enter");
var checkBtn = document.querySelector("#check");
var output = document.querySelector("#show");

checkBtn.addEventListener("click", () =>{
    var inplength = input.value.length;
    if(input.value.includes("@gmail.com")){
        output.innerText = "Successful";
        output.style.color = "green";
    }
    else{
        output.innerText = "Error";
        output.style.color = "red";
    }
})