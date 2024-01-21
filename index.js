// var LET Const

// let val = 5;
// console.log( "'global ", val);

// function as(arg){
//     // val = arg;
//     const val = arg;
//     console.log("in the function call->>  ",val);
// }
// as(10)
// console.log("after calling the function ->>>  ",val);


// Objects

// const obj ={
//     name : "John",
//     age:43,
//     country:"USA"
// }
// const obj2 ={
//     name : "ausip",
//     age:23,
//     // country:"india"
// }

// let res = Object.keys(obj).forEach((val)=>  
// console.log(`${val} : ${obj[val]}`)
// )

// for(const i in obj){
//     console.log(`${i} : ${obj[i]}`);
// }

// Rest and Spread operator
// only use in function argument and function cal

// function as(...obj){
// console.log();
// }
// as(2,3,4,5,6,7)

// const {name,email,...obj} ={
//     name:"suidp",
//     email:"suid@gmail.com",
//     phone:"+918509870013",
//     less: "How are you",
//     msg:"okk i am"
// }
// console.log();

// const nums = [1,2,3,4,5]
// // const bio ={...nums,run:"ellow"}
// const ok = [...nums]
// console.log(ok);

//You cannot use the arguments object in an arrow function
// const OBJ={
//     name:"sudip",
//     roll:10
// }
// const res = (obj)=>{
// return obj
// }
// console.log(res(OBJ));

// SPARD
// const myName = "Oluwatobi Sofela";

// console.log([...myName]);

// const numbers = [1, 3, 5, 7,1];

// function addNumbers(a, b, c, d) {
//   return a + b + c + d;
// }

// console.log(addNumbers(...numbers));

//------------Debounce and throttel
// Debounce----concept-------

// function ad(val){
//     console.log(val);
// }

// function as(fn){
//     return fn()
// }
// as(ad(5))
// let counter =0;

// function data(){
//     console.log("tiem to call ", counter++);
// }

// function impDebounce(call,d){
//     let timer;
//    return function(...arg){
//     if(timer) clearTimeout(timer)
//     timer=setTimeout(()=>{
//         call()
//     },d)
//    }
// }

// const Debounce = impDebounce(data,100)

// Clousers

// const sum = function(a,b){
//     console.log("Grab all those things");
//     return function(...arg){
//         setTimeout(()=>{
//             console.log(Object.assign({},arg));
//         },2000)
//     }
// }
// const res =sum(2,2)
// res(1,1)


// Throttiling------

// const myThrotle =(fn,d)=>{
//     return function(...arg){
//         document.getElementById("btn").disabled=true
//         setTimeout(()=>{
//             fn()
//         },d)
//     }
// }

// const newFun =myThrotle(()=>{
//     document.getElementById("btn").disabled=false
//     console.log("User clicked");
// },2000)


// infinite curring

// function add(a) {
//     return function(b) {
//         if (!b) return a; 
//         return add(a + b); 
//     }
// }

// console.log(add(1)(2)(3)(5));