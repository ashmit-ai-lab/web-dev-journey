// //1.
// let sum = 0
// let i = 1
// while(i <= 5){
//     sum+=i
//     i++;
// }
// //console.log(sum);

// //2.
// let j = 5
// let arr = []
// while(j > 0){
//     arr.push(j--)
// }
// //console.log(arr);

//3. !==
// let teaType;
// let arr = [];
// do{
//     //Nodejs does not support prompt while JS does so run this in browser
//     teaType = prompt(`Enter your favourite tea type (type "stop" to exit)`)
    
//     if(teaType !== "stop")
//         arr.push(teaType)

// }while(teaType != "stop")

// //4.
// let i = 1;
// let total = 0;
// do{
//     total+=i;
//     i++;
// }while(i <= 3)
// console.log(total);

//5.
let arr = []
let num = [2,4,6]

for (let i = 0; i < num.length; i++) {
    arr[i] = num[i] * 2;
}
console.log(arr);


