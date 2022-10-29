//in JS you can store diffrent value of diffrent types in an array.
let cars = ['BMW','AUDI','MG',1,2.6,3,true];
//console.log(cars);

//accesing the element of the an array
//console.log(cars[0]);// o/p -> BMW
//console.log(cars[3]);// o/p -> 1

//------------------> Replacing elements in an array <------------------------------
cars[3] = "Mahindra";
//console.log(cars[3]);//o/p -> Mahindra
//console.log(cars);// o/p -> [ 'BMW', 'AUDI', 'MG', 'Mahindra', 2.6, 3, true ]

//------------------------> Adding element in an array <----------------------------
cars[7]="Honda";
//console.log(cars);// o/p -> [ 'BMW', 'AUDI', 'MG', 'Mahindra', 2.6, 3, true, 'Honda' ]

//---------------------------> Method of an array <-------------------------
//pop method removes the element from the last of array
cars.pop();
//console.log(cars);

//push method pushes a new element at the end of an array
cars.push("TATA");
//console.log("after pusing an element" + cars);

//unshift method adds element at the stating of array
cars.unshift("JLR");
cars.unshift("Mustang");
//console.log(cars);

//shift method removes element from 0th index of array.
cars.shift();
cars.shift();
//console.log(cars);
//console.log(cars.length);


//-----------------------------------> 2D Array <---------------------------------------
["a","b","c"] // array of strings
[1,2,3] // array of numbers

let array2d = [ 
["BMW", 2, null,45,"TATA"],
[4, 5, 6],
[7, true, 9],
[7, "8", 9],
]; //array of arrays

// contigous of allocation of memory

//console.log(array2d); //prints 2d array
//console.table(array2d); // prints 2d array in the from of a table

let res = array2d[1];
//console.log("printing of res array");
//console.log(res);//[ 4, 5, 6 ]

//console.log("printing the res of 2nd array");
//console.log(res[2]);// 6
                   //row col
//console.log(array2d[2][1]);//true
                    //3rd col nhi hai
//console.log(array2d[1][3]); //undefined

// console.log(array2d.length); // number of rows in a 2d array 
//console.log(array2d[0].length) // number of columns in a 2d array

// memory allocation in 2d 
// 2d mein value kaise daale
array2d[1][1] = false;
console.table(array2d);// [4, false ,6]






