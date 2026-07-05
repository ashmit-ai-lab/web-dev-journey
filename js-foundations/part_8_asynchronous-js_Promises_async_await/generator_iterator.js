//generator fucntion doesn't do everything at once -> 1 call 1 result
function* numGenerator(){
    yield 1
    yield 2
    yield 3
}

let gen = numGenerator();
let gen2 = numGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//console.log(gen.next().value); undefined as only 3 yields

console.log(gen2.next().value);
console.log(gen2.next().value);