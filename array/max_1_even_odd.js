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
let nums = userInput[1].split(" ").map(val=>+val)
let even = false

let oddarr = nums.filter((data)=>data%2==0)
let evenarr = nums.filter((data)=>data%2==1)

if(oddarr.length==1){
    console.log(oddarr[0])
}else if(evenarr.length==1){
    console.log(evenarr[0])
}else{
    console.log(-1)
}


  //end-here
});