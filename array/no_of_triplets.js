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

let myobj = {}

for(i of nums){
    if(i in myobj){
        myobj[i]++
    }else{
        myobj[i] = 1
    }
}
let arr = []
let keys = Object.keys(myobj)
for(i of keys){
    arr.push({
        "value":i,
        "count":myobj[i]
    })
}

let outarr = arr.filter(data=>data.count===3)
console.log(outarr.length)

  //end-here
});