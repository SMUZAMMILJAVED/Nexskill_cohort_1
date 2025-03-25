function print(){
    var text=document.getElementById("txt");
    text.value = "Hello"
    console.log(text.value);
    
}
function expandLoris(){
    document.getElementById("slowLoris").innerHTML="<h1>Hello</h1>"
}
function makeInvisible(){
//  document.getElementById("ugly").className += " hidden"
// document.getElementById("ugly").src = "image.png"
// document.getElementById("slowLoris").style.color = "yellow";
// var par = document.getElementsByTagName("p");
// par[0].innerHTML="Hello"
var par= document.childNodes[1].childNodes[2].childNodes[5]
par.innerHTML= "Hello"
}