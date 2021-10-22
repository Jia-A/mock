var checkBtn = document.querySelector("#check");
var list = document.querySelector("#list");

var url = "https://reqres.in/api/users?page=2";

checkBtn.addEventListener("click", () =>{
    fetch(url)
    .then(res =>res.json())
    .then(data =>
        {
            for(var i = 0;i<data.data.length;i++){
                list.innerHTML += `<p>${data.data[i].id} and ${data.data[i].first_name} and ${data.data[i].avatar}</p>`;
            }
        }
        )
    
})