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
let s = userInput[0]
let arr = s.split("")
let str = "";

for(let i=0;i<arr.length;i++){
    let count = 1;
    str+=arr[i]
    while(arr[i+1]==arr[i]){
        count++;
        i++;
    }
    str+=count;
}
console.log(str)
  //end-here
});