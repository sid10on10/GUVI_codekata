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

function Ends3(num){
    let digstrarr = String(num).split("")
    if(digstrarr[digstrarr.length-1]=='3'){
        return true
    }else{
        return false
    }
}
let n = +userInput[0]
let primes = []

for(let i=2;i<n;i++){
    if(Isprime(i)&&Ends3(i)){
        primes.push(i)
    }
}
let sum = primes.reduce((acc,item)=>{return acc+=item},0)
console.log(sum)
  //end-here
});