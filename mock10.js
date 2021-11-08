var checkBtn  =document.querySelector("#check");
var imageShow = document.querySelector("#image");

var urlApi = "https://random.dog/woof.json?ref=apilist.fun"
checkBtn.addEventListener("click", ()=>{
    
    fetch(urlApi)
    .then(res => console.log(res))
    // .then(json => {
    //     if(json.url.includes(".jpg")){
    //         imageShow.innerHTML = `<img src= ${json.url}></img>`;
    //     }
    // });
})