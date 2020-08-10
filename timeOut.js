function doSomething(){
    console.log(2222);
}
console.log(3333);
setTimeout(doSomething, 1000)
console.log(4444);

setTimeout(function(){
    console.log("lazy and waiting for nothing")
},2000);

setTimeout(() => {
    console.log("see you later")
}, 3000);