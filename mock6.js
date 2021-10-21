var head = document.querySelector("#head");
var deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click", () =>{
    head.remove();
    deleteBtn.remove();
})