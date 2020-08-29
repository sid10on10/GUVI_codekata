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
let [a,b] = userInput[0].split(" ").map(val=>+val)
let arr1 = userInput[1].split(" ").map(val=>+val)
let arr2 = userInput[2].split(" ").map(val=>+val)

function isSubset(arr){
    for(i of arr){
        if(arr1.includes(i)==false){
            return false
        }
    }
    return true
}
if(isSubset(arr2)){
    console.log("yes")
}else{
    console.log("no")
}


  //end-here
});