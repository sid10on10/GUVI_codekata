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
let n = +userInput[0]
let arr = userInput[1].split(" ").map(val=>+val)
let evenarr = []

for(let index=0;index<n;index+=2){
    evenarr.push(arr[index])
}

evenarr.sort((a,b)=>a-b)

for(let index=0;index<n;index+=2){
    arr.splice(index,1,evenarr[index/2])
}
console.log(arr.join(" "))


//end-here
});
