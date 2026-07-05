// Class (requires constructor the super one)-> methods -> variables
class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

//If no constructor then borrowed from above
class Car extends Vehicle {
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

//using new is mandatory
let v1 = new Vehicle("Toyota", "Corolla")
//console.log(v1);

//Encapsulation -> making data of a class private -> only within the class access
class Bankaccount{
    #balance = 0

    deposit(amount){
        this.balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let acc = new Bankaccount();
//console.log(acc.balance); // undefined

//console.log(acc.#balance); //-> error private member access

console.log(acc.getBalance());
