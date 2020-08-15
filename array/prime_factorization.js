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
function prime_factorization(n){
    let arr = []
    while(n%2==0){
        arr.push(2)
        n=n/2;
    }
    for(let i=3;i<Math.floor(Math.pow(n,1/2))+1;i+=2){
        while(n%i==0){
          arr.push(i)
          n=n/i
        }
    }
    if(n>2){
        arr.push(n)
    }
    return arr
}
let n = +userInput[0]
if(prime_factorization(n).length>1){
console.log(prime_factorization(n).sort((a,b)=>b-a).join(" "))
}else{
    console.log(-1)
}
  //end-here
});