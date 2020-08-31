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
function Isprime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

function countOnes(num){
    let binary = num.toString(2).split("")
    return binary.filter(data=>data===1).length
}

let outarr = []
let [a,b] = userInput[0].split(" ").map(val=>+val)

for(let i=a+1;i<b;i++){
    if(Isprime(countOnes(i))){
        outarr.push(i)
    }
}
console.log(outarr.length)


  //end-here
});