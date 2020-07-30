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
let n = +userInput[0]
let arr1 = userInput[1].split(" ").map(val=>+val)
let arr2 = userInput[2].split(" ").map(val=>+val)

let commonarr = []
for(i of arr2){
    if(arr1.includes(i)){
        commonarr.push(i)
    }
}
if(commonarr.length===0){
    console.log(-1)
}else{
console.log(commonarr.join(" "))
}
  //end-here
});