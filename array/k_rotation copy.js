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
let result = userInput[2].split(" ").map(val=>+val)

for(let i=1;i<=n;i++){
   let copy = nums.slice()
   let removed = copy.splice(0,i)
   let new_arr = copy.concat(removed) 
   if(new_arr.join(" ")==result.join(" ")){
       console.log(i)
       break;
   }
}


  //end-here
});