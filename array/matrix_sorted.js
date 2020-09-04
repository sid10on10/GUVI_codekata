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
let arr = [];
let [n,k] = userInput[0].split(" ").map(val=>+val)

for(let i=1;i<=n;i++){
    arr = arr.concat(userInput[i].split(" ").map(val=>+val))
}
arr.sort((a,b)=>a-b)
for(let i=0;i<arr.length;i+=k){
    let myarr = arr.slice(i,i+k)
    console.log(myarr.join(" "))
}

  //end-here
});