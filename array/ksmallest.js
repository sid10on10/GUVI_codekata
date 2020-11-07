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
function ksmallest(arr,k){
    let unique = []
    for(i of arr){
        if(unique.includes(i)){
            //pass
        }else{
            unique.push(i)
        }
    }
    unique.sort((a,b)=>a-b)
    return unique[k-1]
}


let n = +userInput[0]

for(let i=1;i<3*n;i+=3){
    let len = +userInput[i]
    let arr = userInput[i+1].split(" ").map(val=>+val)
    let k = +userInput[i+2]
    console.log(ksmallest(arr,k))
}

  //end-here
});