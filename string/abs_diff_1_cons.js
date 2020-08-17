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

function absdiff(num){
    let digarr = String(num).split("").map(val=>+val)
    if(digarr.length==1){
        return false
    }else{
    for(let i=0;i<digarr.length-1;i++){
        if(Math.abs(digarr[i]-digarr[i+1])!=1){
            return false
        }
    }
    return true
    }
} 
let outarr = []

for(let i=1;i<n;i++){
    if(absdiff(i)){
        outarr.push(i)
    }
}
if(outarr.length==0){
    console.log(-1)
}else{
    console.log(outarr.join(" "))
}  //end-here
});