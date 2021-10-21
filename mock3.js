var input = document.querySelector("#pass");
var output = document.querySelector("#show");
var btnLogin = document.querySelector("#check");


btnLogin.disabled = true;
input.addEventListener("keyup", ()=>{
    var passLength = input.value.length;
    if(passLength >=10){
        output.innerText = "Successful";
        btnLogin.disabled = false;
        input.style.border = "green";
    }

    else{
        output.innerText = "Login Unsuccessful";
        btnLogin.disabled = true;
    }
}
)