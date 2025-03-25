// const greet = ()=>console.log("hello");
// greet();
// let arr= [2,4,6,8];
// const [a,b,,d]=arr;
// console.log(a,b,d);
// spread operator 
// let arr = [2,4,6,8];
// let arr_2=[...arr,6,34]
// console.log(arr_2);
// const print =(a,b=3)=>{
//     console.log(a,b);
    
// }
// print(2,6);
// let name = "muzammil";
// console.log(`Hello world!+ ${name}`);
// ternary operator 
// console.log(`this is my ternary operator :${8>5 ? "right" : "invalid!"}`);
// rest paramneter 
// const print =(a,b,...c)=>{
// console.log(a,b,c);
// }
// print(2,4,7,8,9)

// const evens = [2,4,6,8,10];
// const odd=evens.map(val=>val +1);
// console.log(odd);
// filter 
// let evens = [1,2,4,6,8,10,13,19];
// evens= evens.filter(v=>v%2===0);
// console.log(evens);

// function User(name,id){
//     this.name=name,
//     this.id=id
// }
// User.prototype.greet=()=>{
//     console.log("Hello world!");
    
// }
// let std_1= new User("hanzala",23);
// // console.log(std_1);
// std_1.greet();
// class car{
// constructor(color,model){
//     this.color=color;
//     this.model=model
// }
// startEngine(){
//     console.log("engine is starting . . .");
    
// }
// }

// class mercedes extends car {
//     constructor(engine,roof,color,model){
//         super(color,model)
//        this.engine=engine;
//        this.roof=roof
//     }
// }
// const c = new car("blue", "1995");
// const mer = new mercedes("v8","open","red","2025");
// console.log(mer);
// c.startEngine();
class animal{
    constructor(hight,weight){
        this.hight= hight;
        this.weight= weight;
    }
    eat(){
        console.log("eating food!");
        
    }
}
const ani= new animal("6feet" ,"90kg");
console.log(ani);
