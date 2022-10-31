// collection of data
// properties

let obj = {};//empty object
//console.log(obj);//{}

let person = {
    //kay : value
    name : "Aarohi",
    age : 28,
    phone : 9999999999,
    gender : "female",
    height : "170cm"

};

//console.log(`Hey ${person.name}, thank you for signing up!`);
//console.log(person.gender);//dot notation
//console.log(person["gender"]);//bracket notation

let str = "Hello";
//console.log(str.length);//dot notation
//console.log(str["length"]);//bracket notation


// --------------------------------> Nesting of object <--------------------------------
let captAmerica = {
    firstName : "Steve",
    lastName : "Rogers",
    friends : ["Bucky", "Tony Stact", "Brue Banner"],
    age : 102,
    isAvenger : true,
    address : {
        state : "Manhattan",
        city : "New york",
        country : "USA",

    },

    sayHi : function (){
        console.log(`Hello my name is ${this.firstName}`);
    }
};

//console.log(captAmerica);
//console.log(captAmerica.friends);
//console.log(captAmerica.friends[0]);
//console.log("printed using bracket notation "+captAmerica["friends"][0]);

captAmerica.sayHi();//method accessing
//console.log(captAmerica.address.city); //New york


// object consist of properties and method.
// everything in JS is a object.
let arr = ["Hello", "Hi", "Bye", 2, 4, "great"]

// //let arr = [
//     0 : "Hello"'
//     1 : "Hi",
//     2 : "Bye",
//     3 : 2,
//     4 : 4,
//     5 : "great"
// /];

//-------------------------------> For loop <---------------------------
// in keyword in js is used

for(let haathi in captAmerica){
    //key
    //console.log(haathi);//haathi variable ke andar captAmerica ki saari key padi hai.
    //console.log(captAmerica[haathi]); //if you want kay and value both then you can use this.
    
}

//console.log(typeof captAmerica.friends);

//deleteing the key of an object
delete captAmerica.lastName;
//console.log(captAmerica.lastName);


let car = {
    name: "Ferrari",
    model: 2022,
    startEngine: function () {
        console.log(`Starting the engine of the car ${this.name}`)
    }
}

car.startEngine();


// methods-> objects ke andar function



let ar = ["a", "b", 1, true];

let arrr = {
    0: "a",
    1: "b",
    2: 1,
    3:true
}


