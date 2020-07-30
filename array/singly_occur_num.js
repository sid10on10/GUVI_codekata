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
let numbers = userInput[1].split(" ").map(val=>+val)
let myobj = {}

for(i of numbers){
    if(i in myobj){
        myobj[i]++
    }else{
        myobj[i] = 1
    }
}
let values = Object.keys(myobj)
let outarr = []

for(i of values){
    outarr.push({
        "value":i,
        "count":myobj[i]
    })
}
let myarr = outarr.filter(data=>data.count===1)
let dupliarr = outarr.filter(data=>data.count>1)
if(dupliarr.length>0){
    console.log(myarr[0].value)
}else{
    console.log(0)
}

  //end-here
});