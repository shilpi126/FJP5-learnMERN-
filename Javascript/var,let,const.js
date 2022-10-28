// var let const


// var
//var a;
//a=10;
//console.log(a);

//a=20;
//console.log(a);
//console.log(typeof a);

//a="Hello World"
//console.log(a);
//console.log(typeof a);

//a=true;
//console.log(a);
//console.log(typeof a);

//a=null;
//console.log(a);
//console.log(typeof a);

//number
var num = 10;
//console.log(num);

//float
var float = 2.4;
//console.log(float);
//console.log(typeof float);

//Boolean
var t = true;
var f = false;
//console.log(t);
//console.log(f);

//string
var str = "a"
//console.log(typeof str);

str = "How you doing ? \n i am fine how about you?";
//console.log(str);

//var b = `hi hope you guys 
//are able grasp the concepts`//new line pe ayega
//console.log(b);

var num = 4500;
//console.log(`half of ${num} is ${num/2}`);

//1st problem with var keyword
//=> redeclaration and reinitialization is allowed.
var r = "hello";
//console.log(r);

var r = 100;
//console.log(r);

//for overcome this problem we use let keyword

let l = 1000;
//console.log(l);
//let l = "2000";//SyntaxError: Identifier 'l' has already been declared
//console.log(l); 

l=3000;//we can reinitialize a variable but we can not redeclare it.
//console.log(l);

//Loop in js
var n = 10;
for(var i=0; i<n; i++){
  if(i%2==0){
    //console.log(`${i} -> num is even`);
  }
}

//2nd problem with var keyword
//-> var keyword is function scoped in case of function else it is global scope.

//let keyword is block scope

// block
// -> it used to compound statements 
// {

// }

// if (10 > 0) {
//     //do something
//     //2nd state
//     //3rd dtatement 
// }

// block scope -> variables declared in a block are accesible inside that block  , those variables are known to be block scoped 
//varibales declared using let and const are block scoped 
//var is function scoped , it is not block scoped
// var a = 100;

//  {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
//  }

// console.log(a);
//console.log(b);

// let j=10;
// for(var i=0; i<n; i++){
//     let j =10;
//     if(i%2==0){
//         let hello = 1000;
//         console.log("inner" + i);
//         console.log(hello);
//     }
//     console.log("inner" + j);
// }
// console.log("outer" + j);
// console.log(`value of i is ${i}`);
//console.log(hello); => ReferenceError: hello is not defined

//const keyword
//No declaration No initialization

//const a = 2;
//const a = 5;  -> SyntaxError: Identifier 'a' has already been declared
//console.log(a);
//a=4;  -> TypeError: Assignment to constant variable.//
//console.log(a);

//doubt
// let a1 = 10;
// for(var  i=0; i<=10; i++){
//     console.log(`i = ${i}`);
//     console.log(a1);
//     let a1 = 90;
//     console.log(a1);
// }


















