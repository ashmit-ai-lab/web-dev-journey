//1. 
// let arr = ["green tea", "black tea", "chai", "oolong tea"]
// let selectedTeas = []
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == "chai") break;
//     else selectedTeas.push(arr[i]);
// }
//console.log(selectedTeas);

// //2. 
// let arr = ["London", "NY", "Paris", "Berlin"]
// let vc = []
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i].toLowerCase() === "paris") continue;
//     vc.push(arr[i])
// }
// console.log(vc);

// //3. for of loop
// let arr = [1,2,3,4,5]
// let sN = []
// for (const i of arr) {
//     if(i == 4) break;
//     sN.push(i)
// } 
// console.log(sN);

// //4. for of loop
// let arr = ["chai", "green tea", "herbal tea", "black tea"]
// let pt = []
// for (const i of arr) {
//     if(i == "herbal tea") continue;
//     pt.push(i)
// } 
// console.log(pt);

// //5. for in
// let cp = {
//     London: 89000,
//     "New York": 98000,
//     "Paris": 52000,
//     "Berlin": 35000
// }

// let pc = {}
// //console.log(Object.keys(cp), Object.values(cp))
// for (const key in cp) {
//     if(key == "Berlin") break;
//     pc[key] = cp[key];
// }
// console.log(pc);

//6. forEach loop
// let arr = ["earl grey", "green tea", "chai", "oolong tea"]
// availableTeas = []
// // arr.forEach(tea => {
// //     console.log(tea);
// // });

// arr.forEach(function(tea){
//     if(tea == "chai"){
//         return;
//     }
//     availableTeas.push(tea);
// });
// console.log(availableTeas);

//10.
arr = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]

shortTeas = []
for (const i of arr) {
    if(i.length > 10) continue;
    shortTeas.push(i);
}
console.log(shortTeas);
