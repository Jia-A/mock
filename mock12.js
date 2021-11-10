var like = document.querySelector("#like");
var dislike = document.querySelector("#dislike");
var show = document.querySelector("#count");

var initialValue = 0;

like.addEventListener("click", ()=>{
    initialValue = initialValue+1;
    show.innerText = `${initialValue}`;

})

dislike.addEventListener("click", ()=>{
    if(initialValue ===0){
        initialValue =0;
    }
    else{   
        initialValue = initialValue-1;
        show.innerText = `${initialValue}`;
    }

    
})