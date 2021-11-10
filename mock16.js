// Create a web app, which on the click of a button fetches and show profile photo of your GitHub profile and all your repositories in ordered list.

// API - https://api.github.com/users/your_username

var checkBtn = document.querySelector("#check");
var list = document.querySelector("#list");
var image = document.querySelector("#image")

var url = "https://api.github.com/users/Jia-A"
checkBtn.addEventListener("click", ()=> {
    fetch(url)
    .then(data => data.json())
    
     .then(data => {
         
        image.innerHTML =`<img src="${data.avatar_url}"></img>`

        fetch(data.repos_url)
        .then(response => response.json())
        .then(response =>{
            for(var i=0 ;i<response.length;i++){
                list.innerHTML += `<li>${response[i].full_name}</li>`
            }
        })
           
     })
})

