// we can declare it as const too but the variables insides are primitives

const username = {
    firstname: "Ash",
    isLoggedIn: true,
};

const username2 = {
    "first name": "Alps",
    isLoggedIn: true,
};

username.firstname = "Ahhh" 

// console.log(username);
// console.log(typeof username);
// console.log(username2['first name']);

let today = new Date();
//console.log(today);

//Array

let heros = ["Spidy", "Cyclops", true, 89, ["ahhh", 36]]

//console.log(heros[4]);

//type conversion
let isValue = true; //true = 1
// console.log(isValue + 1);
// console.log("1" + 1);

let a = "2";
console.log(Number(a));
console.log(typeof Number(a));

let b = "2abc"
console.log(Number(b)); //Nan - Not a Number
console.log(typeof Number(b));

//null = 0 -> on conversion
//Undefined = NaN





