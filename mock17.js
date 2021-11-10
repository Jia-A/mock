// Import three fonts from Google fonts. Then create a p tag with some text inside it. Now, create three buttons with these font names.
//  On the clicking button, the text font should change accordingly.

var show =document.querySelector("#para");
var font1 =document.querySelector("#font1");
var font2 =document.querySelector("#font2");
var font3 =document.querySelector("#font3");

font1.addEventListener("click", () =>{
    show.style.fontFamily =  'Roboto';
})
font2.addEventListener("click", () =>{
    
    show.style.fontFamily =  'Mochiy Pop P One';
})
font3.addEventListener("click", () =>{
    show.style.fontFamily =  'Ubuntu';
})
