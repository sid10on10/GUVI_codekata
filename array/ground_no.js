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

let arr = userInput[1].split(" ").map(val=>+val)

arr.sort((a,b)=>a-b)

let result = 0

for(let i=0;i<n;i++){
    if(arr[i]<k && arr[i]>result){
        result = arr[i]
    }
}

console.log(result)


  //end-here
});