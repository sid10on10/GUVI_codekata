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
let mystr = userInput[0].split("")
let length = mystr.length

if ( length%2 === 1 ){
    let oddmiddle = parseInt(length/2) + 1
    mystr.splice(oddmiddle-1,1,"*")
}else{
    let evenmiddle = length/2 
    mystr.splice(evenmiddle-1,1,"*")
    mystr.splice(evenmiddle,1,"*")
}
console.log(mystr.join(""))

//end-here
});
