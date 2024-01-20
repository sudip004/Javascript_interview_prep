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

