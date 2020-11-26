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
let [m,n] = userInput[0].split(" ").map(val=>+val)
let ram = 0
let sita = 0

for(let i=1;i<=m;i++){
    let arr = userInput[i].split(" ").map(val=>+val)
    for(let j=0;j<n;j++){
        if(arr[j]===0){
            ram++;
        }else{
            sita++;
        }
    }
}
console.log("RAM: "+ram)
console.log("SITA: "+sita)

  //end-here
});