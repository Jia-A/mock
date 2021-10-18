var output = document.querySelector("#output");
var checkBtn = document.querySelector("#check");

var url = "https://mystery-api.kushanksriraj.repl.co/get";

checkBtn.addEventListener("click", () =>{


fetch(url)
.then(res => {
    if(res.status === 404){
        output.innerText = "Page not found";
    }
    else if(res.status === 401){
        output.innerText = "User not found";
    }
    else{
        output.innerText = "Successfully logged in."
    }
}
)

})