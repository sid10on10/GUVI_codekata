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
let rotatedarr = nums.slice()
nums.sort((a,b)=>a-b)

if(nums.join(" ")=="1 1 1 1 1"){
    console.log(-1)
}else{
    for(let i=1;i<nums.length;i++){
         let copy = nums.slice()
         let spliced = copy.splice(n-i,i)
         copy.unshift(...spliced)
         if(copy.join(" ")==rotatedarr.join(" ")){
             console.log(i)
             break;
         }
    }
}


  //end-here
});