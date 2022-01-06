// function multiply(a:number,b:number){
//     return a*b;
// }
// console.log(multiply(3,5));
// let fruits = ['apple','banana','orange'];
// fruits.push('Mango');
// fruits.pop()
// fruits.pop()
// let fruit
// let person = {
//     name : "Asraful",
//     age: 35,
//     inCaptain: true,
//     country:"India"
// };
// console.log(person.country = "Bangladesh");
// let a: (number|string)[]=[];
// let b: number|string;
// let c : object;
// c ={
//     name:"Asraful",
// }
// let c:{
//     name:string,
//     age:number,
//     adult:boolean
// };
// c={
//     name:"Asraful",
//     age:33,
//     adult:true
// }
// let c:object;
// c = {};
// let a:any;
// a = 5;
// a ="This is none"
// a={
// }
// let myFunc: Function;
// myFunc=()=>{
//     console.log("Hello");
// }
// const myFunc =(a:string,b:string,c?:string)=>{
//     // console.log(`Hello Sir ${a} ${b}`)
//     return a+b;
// };
// // myFunc("Sita","Gita")
// console.log(myFunc("Sita","Gita"))
// type stringOrNumber =string|number; //manual type create ( Type Aliases)
// type usertype = {name:string;age:number}
// const userDetails = (
//     id:stringOrNumber,
//     user:usertype
// )=>{
//     console.log(`User id is ${id}, name is ${user.name}, and age is ${user.age} `);
// };
// // userDetails(12,{name:"Asraful",age:32})
// const sayHello = (user:usertype)=>{
//     console.log(`Hello ${user.age>50 ? "Sir": "Mr."} ${user.name}`)
// }
// sayHello({name:"Asraful",age:52})
// let myFunc: (x:string,y:string)=> void;
// let add:(x:number,y:number)=>number;
// add =(a:number, b:number)=>{
//     return a+b
// }
// console.log(add(2,3))
// let calculator: (x:number,y:number,z:string)=>number;
// calculator = (a:number,b:number,c:string)=>{
//     if(c==='add'){
//         return a+b;
//     }else{
//         return a-b
//     }
// }
// console.log(calculator(5,6,"add")) 
//Asscess modify
import { Player } from './classes/player.js';
const asraful = new Player('Asraful', 39, 'Bangladesh');
let sakib;
sakib = new Player("Sakib", 35, "Bangladesh");
asraful.play();
console.log(asraful.country);
const players = [];
players.push(sakib);
players.push(asraful);
console.log(players);
//=====================================
// Module System 
//interface 
// Function Interface 
// interface RectangleOptions {
//     width:number;
//     length:number;
// }
// function drawRectangle(options:RectangleOptions) {
//     let width = options.width;
//     let length = options.length;
// };
// let threeDoptions={
//     width:30,
//     length:20,
//     height:10,
// };
// drawRectangle(threeDoptions);
