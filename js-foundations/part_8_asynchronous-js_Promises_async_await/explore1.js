//synchronous = regular code line by line run

//asynchronous = having pause
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Hey There! Get lost!")

function besh(){
    console.log(
    "Besharam, you're still here!!");
}
setTimeout(() => {
    besh()
}, 4000);