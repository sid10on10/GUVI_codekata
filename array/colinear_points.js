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
let [x1,y1] = userInput[0].split(" ").map(val=>+val)
let [x2,y2] = userInput[1].split(" ").map(val=>+val)
let [x3,y3] = userInput[2].split(" ").map(val=>+val)

let slope = (y3-y2)/(x3-x2)
let slope2 = (y2-y1)/(x2-x1)

if(slope===slope2){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});