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
        myobj[i]++;
    }else{
        myobj[i] = 1
    }
}

let keys = Object.keys(myobj)
let arr = []
for(i of keys){
    arr.push({
        "value":i,
        "count":myobj[i]
    })
}
function mysort(val1,val2){
    if(val1.count==val2.count){
        return val2.value-val1.value
    }else{
        return val2.count - val1.count
    }
}
arr.sort(mysort)
let outarr = []
for(i of arr){
    outarr.push(i["value"])
}
console.log(outarr.join(" "))
  //end-here
});