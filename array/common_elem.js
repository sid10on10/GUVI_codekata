// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let [n,m] = userInput[0].split(" ").map(val=>+val)
let arr = userInput[1].split(" ").map(val=>+val)
let arr1 = arr.slice(0,n)
let arr2 = arr.slice(n)
let common = []
if(arr1.length>arr2.length){
    for(i of arr1){
        if(arr2.includes(i)){
            common.push(i)
        }
    }
}else{
    for(i of arr2){
        if(arr1.includes(i)){
            common.push(i)
        }
    }
}

console.log(common.join(" "))

  //end-here
});