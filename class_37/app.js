// var fan={
//    color : "red",
//    rotate : function(){
//     console.log("roatating ...");
//    }
// }
// fan.type=["ac","dc"]
// fan.model="2025";  //insert
// fan.color="blue";  // update
// delete fan.color  //delete value from obj
// fan.rotate()
// console.log(fan);

// var std_1={
//     name:"rehan",
//     id:1
// }
// var std_2={
//     name:"bisma",
//     id:2
// }
// var students = [std_1,std_2];
// console.log(students);

// function createObj(name,id){
//    var user={
//     name:name,
//     id:id
//    }
//    return user;
// }

// var std_1=createObj("rehan",1);
// var std_2=createObj("hanzala",2);

// console.log(std_1,std_2);
// constructor 
// function User(name,id){
//   this.name= name,
//   this.id=id
// }
// var std_2= new User("precela",2);
// User.prototype.greet=function(){
//     console.log("Hello from "+this.name);
    
//   }
// var std_1=new User("rehan",1);


// console.log(std_2);
// std_2.greet();
 
          //  primitive / non premitive 
        //   var i=2;
        //   var j=i;
        //    j++;
        //   console.log(i);
        //   console.log(j);
          
          
// var obj={
//     num:2
// };
// var obj_2=obj;
//  obj_2.num= 3;
// console.log(obj);
// console.log(obj_2);

// var arr=[2];
// var arr_2=arr;
// arr_2[0]=3;
// console.log(arr);
// console.log(arr_2);

// var student={
//   name : "hanzala",
//   id:1,
//   "#my-course":"web developemnt"
// }
// console.log(student["#my-course"]);


// var student={
//   name : "hanzala",
//   id:1,
//   class:"Web Development"
// }

// for(key in student){
//     console.log(student[key]);
    
// }
// function createObj(name,id,rollNo){
//   var student = {
//     name:name,
//     id:id,
//     rollNo:rollNo
//   }
//   return student;
// }
// var std_1=createObj("hanzala",2,1122);
// console.log(std_1["name"]);

// function User(name,id,rollNo){
//      this.name=name;
//      this.id=id;
//      this.rollNo=rollNo;
    //  this.greet=function(){
    //   console.log("hello!");
      
    //  }
// }
// User.prototype.greet=function(){
//   console.log("Hello!");
  
// }
// var std_3={
//   name :"ubaid",
//   id:4,
//   rollNo:444
// }
// var std_1=new User("hanzla",2,222);
// var std_2=new User("muzammi;",1,111);
// std_2.greet();
// console.log(std_1 instanceof User);
// console.log(std_1 , std_2);
// std_1.greet();
// var i = 2;

// var j= i;
// i++;
// console.log(i);
// console.log(j);

// function User(name,id){
 
//     this.name=name;
//     this.id=id;
  
 
// }
// User.prototype.greet=function(){
//   console.log("hello");
  
// }
// var std_1=new User("hanzala",1);
// var std_2 = {
//   name :"muzammil",
//  id:2
// }
// console.log(std_1 instanceof User );

// premitive / non premitive

// var i = 2;
// i++;
// var j = i ;  //3
// i++;  //4
// j++;  //4
// --i;  //3
// console.log(i); //3
// console.log(j);  //4


// non primitve 
//  var arr=[2,5,8,9];
//  var arr_2=arr;
//  arr_2[4]= 5;
//  console.log(arr);
//  console.log(arr_2);
// {
//   let n = 2; // Block-scoped variable
//   console.log(n);
// }
// console.log(n);
// const pi= 3.142;

// function add (a,b){
//   return a+b
// }
// const add=()=> a
  


// console.log(add(2));
// let computer={
//   color:"black",
//   company:"dell",
//   square(num){
//     return num **3
    
//   }
  // square :num=>num**2
// }
// // console.log(computer.square(25));
// const {color,company}=computer;
// console.log(color);

// const arr=[2,4,6];
// const [a, ,c]=arr;
// console.log(c);

// let arr = [1,2];
// let arr_2= [ ...arr , 3,4];
// console.log(arr_2);

// for(a of arr){
//   console.log(a);
  
// }
// let a =20;
// console.log(`value of a =  ${a}`);
// let add = (a,b=6)=>{
//   console.log(a+b);
  
// }
// add(2)

// rest parameter 
 
// let print =(a,b,...c)=>{
//   console.log(a,b,c[0],c[1]);
  
// }
// print(3,5,6,7);

// let arr=[2,3,4,5];
// console.log(arr[0]);

//  ternary operators 

//  console.log( 5>6 ? "HEllO" : "Invalid!");
  // map 
  // let evens = [2,4,6,8,10];
  // let odd =evens.map((value)=>{
  //    return value +1
  // });
  // console.log(evens);
  //  filter 
//   let evens = [1,3,2,4,6,8,10];
//  evens=  evens.filter((value)=>value%2===0);
//  console.log(evens);
//  let arr=[3,12,9,19,7,5];
 