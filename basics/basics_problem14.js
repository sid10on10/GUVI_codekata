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
let nandk = userInput[0].split(" ").map(val=>+val)
let n = nandk[0]
let k = nandk[1]
let numbers = userInput[1].split(" ").map(val=>+val)
let count = -1

for (i of numbers){
    if(i === k){
        count++;
    }
}
console.log(count)






//end-here
});
