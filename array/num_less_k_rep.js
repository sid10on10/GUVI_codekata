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
let [n,k] = userInput[0].split(" ").map(val=>+val)
let nums = userInput[1].split(" ").map(val=>+val)

let myobj = {};

for(i of nums){
    if(i in myobj){
        myobj[i]++;
    }else{
        myobj[i] = 1
    }
}

let keys = Object.keys(myobj)
let myarr = []
for(i of keys){
    myarr.push({
        "value":i,
        "count":myobj[i]
    })
}
let anotherarr = myarr.filter(data=>data.count<k)
let outarr = []
for(i of anotherarr){
    outarr.push(i.value)
}
console.log(outarr.sort((a,b)=>a-b).join(" "))



  //end-here
});