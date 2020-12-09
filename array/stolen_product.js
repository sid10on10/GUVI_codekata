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
let testCases = []

for(let i=1;i<3*n+1;i+=3){
    let testarr = []
    let arr1 = userInput[i+1].split(" ").map(val=>+val)
    let arr2 = userInput[i+2].split(" ").map(val=>+val)
    testarr.push(arr1)
    testarr.push(arr2)
    testCases.push(testarr)
}
//console.log(testCases)
for(i of testCases){
    for(let j=0;j<i[0].length;j++){
        if(i[1].includes(i[0][j])==false){
            console.log(j)
            break;
        }
    }
}

  //end-here
});