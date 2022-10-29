//3 types of function
//-----------------------------> Normal Function <-------------------------------
// function add (a,b){
//     console.log(a+b);
// }
// add(6,3);

// function calculator(str,a,b){
//     if(str=="add"){
//         return function add(){
//             console.log(a+b);
//         }
//     }else if(str=="sub"){
//         return function sub(){
//             console.log(a-b);
//         } 
//     }
// }

// let returnFunc=calculator("sub",7,4);
// console.log(returnFunc);
// returnFunc();

//----------------------------> Function Expression <-------------------------------
let sayHi =function(){
    console.log("Hello guys i am function expression");
}
//console.log("line 28"+sayHi);
//sayHi();

let sayBye =function(){
    console.log("bye guys");
}
//console.log("line 34"+sayBye);
//sayBye();
//abcd(); //ReferenceError: abcd is not defined

//-------------------> IIFE (Imediately invoke function expression) <----------------------
let addtionIIFE = (function (a,b){
    console.log(a+b);
})//(20,30);

console.log("line 43" + addtionIIFE);
console.log(addtionIIFE(20,30));
