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
let arr = []
let outarr = []

for(let i=1;i<=n;i++){
    let query = userInput[i].split(" ").map(val=>+val)
    if(query.length==1){
        if(arr.length>0){
            outarr.push(Math.min(...arr))
        }else{
            outarr.push(-1)
        }
    }else{
        arr.push(query[1])
    }
}
console.log(outarr.join(" "))

  //end-here
});