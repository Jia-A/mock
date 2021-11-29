var str ="I am vishal, I am sumit";

var spl = str.split(",");

var rev1=spl[0].split(" ").reverse().join(" ")
var rev2=spl[1].split(" ").reverse().join(" ")

var final = rev1.concat(",").concat(rev2)
console.log(final);