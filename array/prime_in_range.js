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
let [n,k] = userInput[0].split(" ").map(val=>+val)
let count = 0

for(let i=n;i<k+1;i++){
    if(Isprime(i)){
        count++;
    }else{
        // pass
    }
}
console.log(count)

  //end-here
});