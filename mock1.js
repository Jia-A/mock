var input = document.querySelector("#value");
var btnHead1 = document.querySelector("#head1");
var btnHead2  = document.querySelector("#head2");
var btnBlue = document.querySelector("#blue");
var output = document.querySelector("#output");
btnBlue.disabled = true;
btnHead1.addEventListener("click", ()=>
{   
    btnBlue.disabled = false;
    
    output.innerHTML = `<h1>${input.value}</h1>`

})

btnHead2.addEventListener("click", () =>
{
    btnBlue.disabled = false;
    
    output.innerHTML = `<h2>${input.value}</h2>`
})

btnBlue.addEventListener("click", ()=>
{
    output.style.color = "blue";
})

var obj = {
    name : "jiya",
    surname : "agrawal"
};

console.log(obj.name);