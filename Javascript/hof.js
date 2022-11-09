
//HOF => // function which take other function as argument.
                      //or
        //function which return a function.

// function calculator is a hof

function calculator(operator,a,b){
    if(operator == "+"){
        return function add(){
            return a+b;
        };
    }
}

//console.log("hello");
let fn = calculator("+",3,4);
let an = fn();
//console.log(an);

//---------------------------> functional programming <---------------------------------
const arr = [2,5,8,6,78];

//calculate the area of squres
let areaOfSquare = function(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        res.push(arr[i]*arr[i]);
    }
    return res;
   } 
   //console.log(areaOfSquare(arr));

// calculate the perimeter of square
let perimeterOfSquare = function(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        res.push(4*arr[i]);
    }
    return res;
}
//console.log(perimeterOfSquare(arr));

//calculate the digonal of square
let diagonalOfSquare = function(arr){
    let res = [];
    for (let i=0; i<arr.length; i++){
        res.push(Math.sqrt(2)*arr[i]);
    }
    return res;
}
//console.log(diagonalOfSquare(arr));


//better way
//console.log("better way");
let area = function (a){
    return a*a;
};

let perimeter = function (a){
    return 4 * a;
};

let diagonal = function (a){
    return Math.sqrt(2) * a;
};

let calculate = function (arr, logic) {
    let res = [];
    for (let i=0; i< arr.length; i++){
        res.push(logic(arr[i]));
    }
    return res;
};

//console.log(calculate(arr, area));
//console.log(calculate(arr, perimeter));
//console.log(calculate(arr, diagonal));

//-----------------------------------> map <-----------------------------------
//write a code to calculate area of square
let nArr = [1,2,3,4]
// let res = nArr.map ((a) => {
let res = nArr.map(function(a){
    return a * a;
});

//console.log(res);

//filter
// write a code to return an array of even numbers
let newArr = [1,2,3,4,5,6,7]
let evenNum = newArr.filter(function(num ){
    return (num % 2 == 0)
});
//console.log(evenNum);

//reduce
//write a code to get sum of array
let sumArr = [1,2,3,4,5];
let sumOfArr = sumArr.reduce(function (acc, num) {
    //console.log("acc:" ,acc);
    //console.log("num:", num);
   acc = acc + num;
   return acc; 
});
//console.log(sumOfArr);

// acc: 1
// num: 2
// acc: 3
// num: 3
// acc: 6
// num: 4
// acc: 10
// num: 5
// 15


//write a code to calculate largest element in arr
const ar = [-2, -5, -8, -6, -78]; 
//output -> -2

function largestElement(max, cur) {    
    //console.log("max:",max);
    //console.log("cur:" ,cur);
  if (cur > max) {
    max = cur;
  }
  return max;
}

var answer = ar.reduce(largestElement,-Infinity);
//console.log(answer);

// max: -Infinity
// cur: -2
// max: -2
// cur: -5
// max: -2
// cur: -8
// max: -2
// cur: -6
// max: -2
// cur: -78
// -2


var users = [
    { firstName: "Mayank", lastName: "Singh", age: 55 },
    { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
    { firstName: "Saket", lastName: "Bharti", age: 15 },
  ];
  
  //write a code to get fullName of all the users
  // output-> ["Mayank Singh", "Jyoti Jauhari", "Saket Bharti"]
  
  function getFullName(obj) {
    return obj.firstName + " " + obj.lastName;
  }
  
  var ans = users.map(getFullName)
  //console.log(ans);


  //write a code to return the number of people with a particular age
// output-> {55:1,25:1,15:1}
//"bees in the knees"
//for object
// function peopleAge(robj, cobj) {
//     let age = cobj.age;
//     //console.log(age);
//     // let fres;
//     if (robj[age]) {
//       robj[age] = robj[age] + 1;
//     }
//     else {
//       robj[age] = 1;
      
//     }
//     // fres = robj;
//     //console.log(fres);
//     return robj;
//     }
// var obj = users.reduce(peopleAge, {}); 
// console.log(obj);


//for number
// let array = [1,2,3,1,1,2,4,5,6,2,4,4];
// function peopleAge(robj, cobj) {
//     let age = cobj;
//     //console.log(age);
//     // let fres;
//     if (robj[age]) {
//       robj[age] = robj[age] + 1;
//     }
//     else {
//       robj[age] = 1;
      
//     }
//     // fres = robj;
//     //console.log(fres);
//     return robj;
//     }
// var obj = array.reduce(peopleAge, {}); 
// console.log(obj);


//for string
let str = "bees in the knees";

function peopleAge(robj, cobj) {
    let age = cobj;
    //console.log(age);
    // let fres;
    if (robj[age]) {
      robj[age] = robj[age] + 1;
    }
    else {
      robj[age] = 1;
      
    }
    // fres = robj;
    //console.log(fres);
    return robj;
    }
var obj = str.split("").reduce(peopleAge, {}); 
//console.log(obj);


//write a code to get firstName of all the users with age less than 30
// output-> [ "Jyoti Jauhari", "Saket Bharti"]

//hint : map and filter use hoga
var ans = users.filter(function(obj){
    if(obj.age<30){
        console.log(obj.firstName + " " + obj.lastName );
    }
    
})

//-------------------------------> or <-------------------------------
//var ans = users.filter((obj) => obj.age < 30)
// console.log(ans);
// var ans = ans.map(getFullName);
// console.log(ans);

// console.log(users.filter((obj) => obj.age < 30)
// .map(getFullName)
// );

//-----------------------------> using reduce <-------------------------------
// function getPeopleLessThen30(arr, obj) {
//     if (obj.age < 30) {
//         arr.push(obj.firstName + " " + obj.lastName)
//     }
//     return arr;
// }

// var ans = users.reduce(getPeopleLessThen30,[]);
// console.log(ans);




// console.log(calculate(arr, area));

// console.log(arr.calculate(area));
// console.log(arr.map(area));

// //------------------------------> implementation of our own map <-----------------------------------
// Array.prototype.myMap = function (logic) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(logic(this[i]));
//   }
//   return res;
// }
// var narr = [1, 2, 3, 4];
// var ans = narr.myMap(area);
// console.log(ans);

// var ans = narr.myMap(function (num) {
//   return num * 3;
// });
// console.log(ans);

// Array.prototype.mySize = 8;
// console.log(narr.mySize);











