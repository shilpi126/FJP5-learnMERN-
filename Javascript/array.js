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
console.log(cars);// o/p -> [ 'BMW', 'AUDI', 'MG', 'Mahindra', 2.6, 3, true, 'Honda' ]

//---------------------------> Method of an array <-------------------------
//pop method removes the element from the last of array
cars.pop();
console.log(cars);

//push method pushes a new element at the end of an array
cars.push("TATA");
console.log("after pusing an element" + cars);

//unshift method adds element at the stating of array
cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

//shift method removes element from 0th index of array.
cars.shift();
cars.shift();
console.log(cars);
console.log(cars.length);



