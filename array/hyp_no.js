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
function Isprime(num){
    if(num==1 || num==0){
        return false
    }else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false
            }
        }
        return true
    }
}
function hyp(num){
    let digitarr = String(num).split("").map(val=>+val)
    for(i of digitarr){
        if(Isprime(i)==false){
            return false
        }
    }
    return true
}
let hyparr = []
for(let i=2;i<10000;i++){
    if(hyp(i)){
        hyparr.push(i)
    }
}
console.log(hyparr[n-1])

  //end-here
});