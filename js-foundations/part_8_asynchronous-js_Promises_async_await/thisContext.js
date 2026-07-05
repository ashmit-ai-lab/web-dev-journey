const person = {
    name: "Ash",
    greet(){
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet(); // it has context on direct execution

const grf = person.greet
grf(); //`Hi, I am undefined` -> context lost

const bg = person.greet.bind({name: "Ahhhh"});
bg();

//bind, call and apply
/* call() -> function.call(thisArg, arg1, arg2, ...)

const person1 = {
    name: "Alice"
};

const person2 = {
    name: "Bob"
};

function greet(city) {
    console.log(`Hi, I'm ${this.name} from ${city}`);
}

greet.call(person1, "Delhi");
greet.call(person2, "Mumbai");
*/

//apply
/*
The only difference is how arguments are passed.
function introduce(age, city) {
    console.log(`${this.name} is ${age} years old from ${city}`);
}

const person = {
    name: "Alice"
};

introduce.apply(person, [22, "Delhi"]);
*/