// simple calculator  
// var num_1 = +prompt("write any number ");
// var num_2 = +prompt("write any number ");
// var operator= prompt("choose operator  ");
// if(operator === "+"){
//   console.log(num_1 + num_2);
  
// }else if(operator === "-"){
//  console.log(num_1 - num_2);
 
// }
// else if(operator === "*"){
//     console.log(num_1 * num_2);
    
// }
// else if(operator === "/"){
//     console.log(num_1 / num_2);
    
// }else {
//     console.log("invalid command");
    
// }
function fillCity() {
var cityName;
var zipEntered = document.getElementById("zip").value;
switch (zipEntered) {
case "60608" :
cityName = "Chicago";
break;
case "68114" :
cityName = "Omaha";
    break;
    case "53212" :
    cityName = "Milwaukee";
 }
    document.getElementById("city").value = cityName;
    }