var input = document.querySelector("#char");
var output = document.querySelector("#count");
var checkBtn = document.querySelector("#check");
var show = document.querySelector("#show");
 var counter = 30 ;
 var count = 0;
checkBtn.disabled = false;
input.addEventListener("input", ()=>{
    count = counter-input.value.length;
    output.innerText = `${count}`;
    if(count<0){
        output.style.color = "red";
        checkBtn.disabled = true;
    }
    else if(count>=15){
        output.style.color = "black";
        checkBtn.disabled = false;
    }

    else if(count<=15){
        output.style.color = "yellow";
        checkBtn.disabled = false;
    }
   
    
    
})

checkBtn.addEventListener("click", () =>{
    show.innerText = input.value;
})