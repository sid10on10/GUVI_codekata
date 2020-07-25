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
let nandw = userInput[0].split(" ").map(val => +val)
let n = nandw[0]
let w = nandw[1]
let numbers = userInput[1].split(" ").map(val => +val)

numbers.unshift("fake");

let checkind = n-n%w
let outarr = []
for(let index=1;index<checkind+1;index+=w){
    let myarr = numbers.slice(index,index+w)
    for(let j=0;j<w;j++){
        if (myarr.indexOf(0) === -1){
        outarr.push(-1)
    }else{
        outarr.push(index)
    }
    }
}
console.log(outarr.join(" "))




//end-here
});
