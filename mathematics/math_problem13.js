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
let n = +userInput[0]
let arr = []

for(let i=1;i<n+1;i++){
    arr.push(i)
}

let count = 0;

for(let index=0;index<arr.length;index++){
    let first = arr[index]
    for(let j=index+1;j<arr.length-1;j++){
        let second = arr[j]
        if(first+second===n){
            count++
        }
    }
}
console.log(count*2)



  //end-here
});