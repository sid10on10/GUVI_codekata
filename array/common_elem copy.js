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
let [n,k] = userInput[0].split(" ").map(val=>+val)
let arrs = []

for(let i=1;i<n+1;i++){
    arrs.push(userInput[i].split(" ").map(val=>+val))
}

let common = []

for(let i=0;i<k;i++){
    let element = arrs[0][i]
    let flag = true
    for(let j=0;j<n;j++){
        if(!arrs[j].includes(element)){
            flag = false
        }
    }
    if(flag){
        common.push(element)
    }
}
if(common.length>0){
    console.log(common.join(" "))
}else{
    console.log(-1)
}
  //end-here
});