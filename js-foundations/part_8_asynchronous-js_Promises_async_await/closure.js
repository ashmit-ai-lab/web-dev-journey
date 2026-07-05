/*closure - functions which remember the environment in which they are created.
-> Can retain the variables declared outside of them
*/

//Example
function outer(){
    let c = 4;
    return function(){
        c++;
        return c;
    }
}

let inc = outer();
console.log(inc());
console.log(inc());
console.log(inc());

// 5 6 7 remembers the memory -> closure function