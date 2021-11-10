var checkBtn = document.querySelector("#check");
var showDiv = document.querySelector("#show");

var url = "https://mystery-api.kushanksriraj.repl.co/get";
checkBtn.addEventListener("click", ()=>{
    fetch(url)
    
    .then(response => {
        const data = response.text();
        if(response.status === 404){
           data.then(text => showDiv.innerText = text)
        }
        else if(response.status === 401){
            data.then(text => showDiv.innerText = text)
        }
        else{
            data.then(text => showDiv.innerText = text)
        }
    })
})