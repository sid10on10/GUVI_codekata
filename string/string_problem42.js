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
let strarr = userInput[0].split("")
let myobj = {}
let outarr = []

for(i of strarr){
    if(i in myobj){
        myobj[i]++;
    }else{
        myobj[i] = 1
    }
}
let keys = Object.keys(myobj)
let arr = [];
for(i of keys){
    arr.push({
        "value":i,
        "count":myobj[i]
    })
}
let newarr = arr.filter(val=>val.count===1)
for(i of newarr){
    outarr.push(i["value"])
}
console.log(outarr.join(" "))
  //end-here
});