// Abstraction -> Hiding the details -> only care about the return value

class Coffeemachine{
    start(){
        return `Starting the machine...`
    }

    brew(){
        //complex calculation
        return `Brewing coffee`
    }

    button(){
        let m1 = this.start();
        let m2 = this.brew();
        return `${m1}\n${m2}`
    }
}

let mm = new Coffeemachine();
//console.log(mm.button());

//Polymorphism -> many forms

class Bird{
    static add(a, b){
        return a + b;
    }

    fly(){
        return `flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird();
let penguin = new Penguin();

//Same method diff roles
//console.log(bird.fly());
//console.log(penguin.fly());


// static method can only be used with class name not with objects
//console.log(bird.add(3, 4)); // Error
//console.log(Bird.add(3, 4)); // Correct


// Getters and setters

class Employee{
    #salary;
    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary cannot be negative")
        }
        this.name = name;
        this.#salary = salary; 
    }

    get salary(){
        //return `You are not allowed to see salary`
        return this.#salary;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid salary");
        }
        else this._salary = this.salary;
    }
}

let emp = new Employee("Alice", 50000)
//emp.salary = -50000

console.log(emp.salary);

// _ statement for showing getters and setters for that property about to come

