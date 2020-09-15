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
function digitsum(n){
    let strarr = String(n).split("").map(val=>+val)
    return strarr.reduce((acc,item)=>{return acc+=item},0)
}

function Isprime(n){
    if(n==1 || n==0){
        return false
    }else{
        for(let i=2;i<n;i++){
            if(n%i===0){
                return false
            }
        }
        return true
    }
}

let [l,r] = userInput[0].split(" ").map(val=>+val);
let count = 0;

for(let j=l;j<r;j++){
    let sum = digitsum(j)
    if(Isprime(sum)){
        count++;
    }
}
console.log(count)

  //end-here
});