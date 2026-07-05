let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        return `${this.make} car got started in ${this.year}`;
    },
};
//console.log(car.start())

function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John", 20);
//console.log(john);


function Animal(type){
    this.type = type
}

//Prototypal chain
Animal.prototype.speak = function(){
    return `${this.type} makes a sound.`
}

Array.prototype.ash = function(){
    return `Custom method ${this}`;
}

let arr = [1, 2, 3]
console.log(arr.ash());

let arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr1.ash());
