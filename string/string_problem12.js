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
let sarr = userInput[0].split("")
let n = sarr.length
let middle = parseInt(sarr.length/2)

if((sarr[0] === 'a' || sarr[0] === 'A') && (sarr[n-1] === 'z' || sarr[n-1] === "Z") && ((sarr[middle] === 'm' || sarr[middle] === 'M'))){
    console.log(1)
}else{
    console.log(0)
}




//end-here
});
