//1. First Class Function

// function makeTea(Ttype){
//     return `Ahhhhhh ${Ttype}`;
// }

// function processteaorder(Teaf){
//     return Teaf("earl grey");
// }

// console.log(processteaorder(makeTea));

//2. 
function createTeaMaker(name){
    return function Teaf(teaType) {
        return `Making ${teaType} ${name}`;
    };
}

let teaMaker = createTeaMaker("ash");
//let res = teaMaker("green tea")
// console.log(teaMaker);
// console.log(teaMaker());
console.log(teaMaker("green tea"));


