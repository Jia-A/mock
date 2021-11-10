var val1 = document.querySelector("#value1");
var val2 = document.querySelector("#value2");
var plusBtn = document.querySelector("#plus");
var minusBtn = document.querySelector("#minus");
var productBtn = document.querySelector("#product");
var divisionBtn = document.querySelector("#division");
var result = document.querySelector("#result");


function calculateHandler(e){
    var data1 = Number(val1.value);
    var data2 = Number(val2.value);
    console.dir(e.target)
     if(e.target.innerText === "+"){
       var answer = data1 + data2;
     }
    // if(symbol==="-"){
    //     var answer = data1 - data2;
    // }
    // if(symbol==="*"){
    //     var answer = data1 * data2;
    // }
    // if(symbol==="/"){
    //     var answer = data1 / data2;
    // }


    
    result.innerText
}
plusBtn.addEventListener("click", 
    calculateHandler
)

minusBtn.addEventListener("click", () =>{
    calculateHandler("-")
})

productBtn.addEventListener("click", () => {
    calculateHandler("*")
})

divisionBtn.addEventListener("click", () =>{
    calculateHandler("/")
})