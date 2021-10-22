var checkBtn = document.querySelector("#check");
var list = document.querySelector("#list");

const students = [
    {
      name: "Ram",
      marks: 35
    },
    {
      name: "Rahul",
      marks: 40
    },
    {
      name: "Pooja",
      marks: 80
    },
    {
      name: "Raghav",
      marks: 75
    },
    {
      name: "Arun",
      marks: 26
    }
  ];
  

checkBtn.addEventListener("click", () => {
        for(var i=0;i<students.length;i++){
           
        if(students[i].marks>=40){
            list.innerHTML += `<li>${students[i].name}<li>`;
        }
    }}
)