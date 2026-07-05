//Objects inherit properties from other objects via a prototypal chain

function Person(name){
    this.name = name
}

//Prototype chain
Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}!`);
}

let ash = new Person("Ashmit");
ash.greet();