//Constructors
function Person(name, age){
    this.name = name
    this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

//Objects from the constructor
let myPer = new Person("Ash", 19)
let myCar = new Car("TATA", "Safari")
//console.log(myCar);
//if we remove new, object will print undefined

function Tea(type){
    this.type = type
    this.describe = function(){
        return `This is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("Lemon tea");
//console.log(lemonTea.describe());

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("dog")
//console.log(dog.sound());

let cat = new Animal("cat")
//console.log(cat.sound());

function Drink(name){
    //check creation with new keyword
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name
}

let tea = new Drink("Tea")
let coffee = Drink("Coffee")



