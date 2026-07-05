// // Number

// // let name = "Ash"
// let num = 543

// // console.log(typeof(name));
// // console.log(typeof(num));

// let ab = new Number(120) //not recommended

// console.log(ab);
// console.log(ab.valueOf());
// console.log(typeof(ab));

// let firstname;
// console.log(firstname);
// firstname = null
// console.log(firstname);

//String

let myString = "Hello"
let myStr1 = 'Hella'

let oldStr = myString + " " + "ash" + '!';
let demo = `Value is ${2*2}`;

// console.log(demo);
// console.log(oldStr);

//String interpolation
let myStr2 = `Hola ${myStr1}!`; //backticks
// console.log(myStr2);

//Symbol -> guarantees uniqueness on a page
// generating a unique value
let sm1 = Symbol("ash") //naming a symbol to regenerate a same one
let sm2 = Symbol()

console.log(sm1 == sm2);




