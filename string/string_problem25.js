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
let str = userInput[0].split("")
let rev = str.slice().reverse()

if(rev.join("")===str.join("")){
    console.log("yes")
}else{
    console.log("no")
}







//end-here
});
