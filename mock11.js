var input =document.querySelector("#name");
var greetBtn = document.querySelector("#greeting");

greetBtn.addEventListener("click", () =>{
    
    var name = (input.value);
    const name2 = name.charAt(0).toUpperCase() + name.slice(1);
    alert("Hey " + name2);
})