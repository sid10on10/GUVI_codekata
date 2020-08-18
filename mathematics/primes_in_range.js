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
    if(num==0||num==1){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
let range = +userInput[0]
let [l,r] = userInput[1].split(" ").map(val=>+val)
let arr = []

for(let i=l;i<=r;i++){
    if(Isprime(i)){
        arr.push(i)
    }
}
console.log(arr.length)
  //end-here
});