// let arr = [1, 2, 3, 4];
// arr.myProp = "hello"
// arr.print = function(){
//     console.log("Hello from array");
// }
// console.log(arr); //output -> [ 1, 2, 3, 4, myProp: 'hello', print: [Function (anonymous)] ]
//                                         // key value pair ki tarah kam kar raha hai isliye array ko object bhi kaha jata hai

// for (let key in arr) {
//     // console.log(key);
//     console.log(key, " : ", arr[key]);
// } 

// arr[95] = 100;
// console.log(arr);
// console.log(arr.length);

// let obj = {
//     name : "Adam",
//     lastName : "Joshi",
//     sayHi : function(){
//         console.log("shilpi say's Hi");
//     }

// }

// console.log("line number 27", obj[25]);//undefined

//function is a object that can be excuted when you invoke or call.
function fn (){
    console.log("Hello from fn");
}
fn.prop = "property of function";
fn.myFunc = function func (){
    console.log("I am a method of a function");
}
console.log(fn); //[Function: fn] prop: 'property of function', myFunc: [Function: func]}
console.log(fn.prop);//property of function
fn();//Hello from fn
fn.myFunc();//I am a method of a function

// 6 primitive types => number, string, boolean, undefined, null, symbol.

