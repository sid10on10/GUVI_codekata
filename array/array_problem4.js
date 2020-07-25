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
let numbers = userInput[0].split(" ").map(val => +val)
let n = numbers[0]
let m = numbers[1]
let comparearray = userInput[1].split(" ").map(val => +val)
let outarr = [];

for (let ind=0;ind<n;ind++){
    if (ind === (n-1)){
       if( Math.abs(comparearray[n-1]-comparearray[0]) > m ){
           outarr.push(1)
       }else{
           outarr.push(0)
       }
    } else{
        if(Math.abs(comparearray[ind]-comparearray[ind+1]) > m ){
        outarr.push(1)
       }else{
        outarr.push(0)
       }
    }
    
}
console.log(outarr.join(" "))
//end-here
});
