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

let unique = []
for(i of nums){
    if(!unique.includes(i)){
        unique.push(i)
    }else{
        // pass
    }
}
unique.sort((a,b)=>a-b)
if(unique[k-1]!=undefined){
    console.log(unique[k-1])
}else{
    console.log(-1)
}

  //end-here
});