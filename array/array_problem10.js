const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let n = +userInput[0]
let k = +userInput[2]
let numbers = userInput[1].split(" ").map(val=>+val)
let outarr = []

for(let i=0;i<n-k+1;i++){
    let negflag = true
    for(let j=i;j<i+3;j++){
        if(numbers[j]<0){
            outarr.push(numbers[j])
            negflag = false
            break
        }
    }
    if(negflag){
        outarr.push(0)
    }
    
}
console.log(outarr.join(" "))



//end-here
});
