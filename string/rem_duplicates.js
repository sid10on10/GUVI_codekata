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
let strarr = userInput[0].split("")

for(let i=0;i<strarr.length;i++){
    let flag = false;
    for(let j=i+1;j<strarr.length;j++){
        if(strarr[i]==strarr[j]){
            strarr.splice(j,1)
            j--;
            flag=true
        }
    }
    if(flag){
        strarr.splice(i,1)
        i--;
    }

}
console.log(strarr.join(""))

  //end-here
});