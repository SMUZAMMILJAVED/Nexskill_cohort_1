// var num =10;
// function print(){
// var num = 20;
// console.log(num);

// }

// console.log(num);
// {
// const num = 10;
// num = 30;
// console.log(num);
// }

// let num = 20;
// let num =30;
// console.log(num);

// const add=a=>console.log(a);
// add(2);
// const std_1={
//     name : "muzammil",
//     id : 1
// }
//  function User(name,id){
//     this.name=name;
//     this.id= id;
    
    
//  }
//  User.prototype.greet=()=>console.log("do homework!");
//  const std_1=new User("muzammil",2);
//  const std_2= new User("hanala",3);
//  const std_3= new User("bisma",5)
//  console.log(std_1);
//  console.log(std_3);
//  console.log(std_2);
// class Animal{
//   constructor(color,weight){
//     this.color=color,
//     this.weight=weight
//   }
//   walk(){
//     console.log("walk !");
//   }
// }
// class Cow extends Animal{
//   constructor(color,weight,hight){
//     super(color,weight);
//     this.hight=hight;
//   }
     
//     eat(){
//         console.log("cow eat grass!");
        
//     }
// }

// const cow = new Animal("black","150kg");
// const c= new Cow ("red","90kg","5feet");
// const c= new Cow("red","150kg","6feet");
// console.log(c.eat());


                // localStorage 

// const json=JSON.stringify({name:"muzammil"});
// // console.log(json);

// localStorage.setItem("obj",json);

// // localStorage.removeItem("obj");

// const value=localStorage.getItem("obj");
// const final=JSON.parse(value)
// console.log(typeof(final));

//  static 
// class Car{
//     constructor(color,brand){
//         this.color= color,
//         this.brand=brand
//     }
//   static startEngine(){
//         console.log("starting engine ... ");
        
//     }
// }
// // const toy= new Car("red","toyota");
// // console.log(toy.startEngine());
// console.log(Car.startEngine());
// class DataSaver{

//     static save(name,data){
//      const json=JSON.stringify(data);
//      localStorage.setItem(name,json);
//      return true;
//     }

//     static getValue(name){
//     const value=  localStorage.getItem(name);
//      return JSON.parse(value);
//     }
// }

// DataSaver.save("obj",{name:"muzammil"});
// console.log(DataSaver.getValue("obj"));
                       //  reduce 
// let arr=[6,6,6,6,6,6];
// arr=arr.reduce((p,c)=>p*c);
// console.log(arr);
// class Obj{
//     constructor(name){
// this.name=name;
//     }
//    get print(){
//         console.log(this.name);
        
//     }
// }
// const c= new Obj("Muzammil");
// c.print=()=>{
//     console.log("Elishah");
    
// }
// c.print;

                        // symbol
// const sym=Symbol();
// console.log(sym===sym);
// class DataSaver{
//     set val(str){
//     if(str && str[0]==="A"){
//     this.name = str
//     }
//     }
//    get val(){
// return this.name;
//    }
// }
   
// const data=new DataSaver();
// data.val="Apple";
// data.val="";
// console.log(data.val);

                     // set intervel 
// setInterval(()=>console.log("Hello"),5000)
                      // set time out 
// setTimeout(()=>{
//     console.log("Hello");
    
// },5000)

                          //  callback 
// function count (times){
//     return new Promise((resolve,reject)=>{
//           const intevel= setInterval(()=>{
//     console.log("Hello");
    
//  },1000);
//  setTimeout(()=>{
//     clearInterval(intevel);
//     resolve()
    
//  },times*1000)
//     })
  
// }
// count(3)
// .then((d)=>console.log("done!"))
// .catch((err)=>console.log("Error"));


