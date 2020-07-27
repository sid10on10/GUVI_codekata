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
let cases = +userInput[0]*2
let bigarr = []

for(let index=2;index<cases+1;index+=2){
    let arr = userInput[index].split(" ").map(val=>+val)
    bigarr.push(arr)
}
//console.log(bigarr)
let outarr = []

for(let index=0;index<bigarr.length;index++){
    let array = bigarr[index].sort((a,b)=>a-b)
    outarr.push(array.join(" "))
}
console.log(outarr.join(" "))


//end-here
});
