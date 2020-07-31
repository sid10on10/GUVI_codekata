const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let sides = userInput[0].split(" ").map(val=>+val)
sides.sort((a,b) => a-b)
let n = sides[0]
let m = sides[1]
let k = sides[2]

if( (k**2) === (m**2)+(n**2) ){
    console.log("yes")
}else{
    console.log("no")
}




//end-here
});
