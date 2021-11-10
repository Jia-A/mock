// Here’s an API. Fetch the name and age of user and show them on the web page. Now check weather the user is eligible for vaccination ( must be above 45 ). If yes, show the name in green colour. API - https://randomuser.me/api/?results=10

var list = document.querySelector("#details");
var checkBtn = document.querySelector("#check");
var url = " https://randomuser.me/api/?results=10";
var eligible = "";
checkBtn.addEventListener("click", () =>{
    fetch(url)
    .then(data => data.json())
    .then((data) => 
        {
            
            for(var i=0;i<data.results.length;i++){
                
                if(data.results[i].dob.age>45){
                    list.innerHTML = list.innerHTML +`<li style="color:green;">${data.results[i].name.first}  and ${data.results[i].dob.age}`;
                }
                else{
                    list.innerHTML = list.innerHTML +`<li>${data.results[i].name.first}  and ${data.results[i].dob.age}`;
                }
                
                console.log(data.results[i].name.first)
            }
        }
    )
    })


    
