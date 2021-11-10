var user = document.querySelector("#user-name");
var password = document.querySelector("#password");
var checkBtn = document.querySelector("#check");
var showDiv = document.querySelector("#show");

var obj = { 
    username:"Jiya", 
    password: "Ironman" 
 }
checkBtn.addEventListener("click", ()=>{
    var userName = user.value;
    var pass = password.value;
    if(userName===obj.username && pass===obj.password){
        showDiv.innerText ="Successful";
    }
    else{
        showDiv.innerText = "Failed"
    }

})