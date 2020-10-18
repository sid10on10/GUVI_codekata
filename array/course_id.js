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
let arrs = []

for(let i=0;i<n;i++){
    arrs.push({
        index:i,
        arr:userInput[1+i].split(" ").map(val=>+val)
    })
}

function summer(arr){
    return arr.reduce((acc,item)=>{return acc+=item},0)
}
arrs.sort((a,b)=>summer(b["arr"])-summer(a["arr"]))
console.log(arrs[0]["index"]+":"+summer(arrs[0]["arr"]))
  //end-here
});