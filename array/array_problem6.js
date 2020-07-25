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
let numbers = userInput[1].split(" ").map(val=>+val)
let outarr = []

for(let index = 0;index<n;index++){
    let minflag = false
    for(let j=index+1;j<n;j++){
        if(numbers[j]<numbers[index]){
            outarr.push(numbers[j])
            minflag = true
            break
        }
    }
    if(!minflag){
        outarr.push(-1)
    }
}
console.log(outarr.join(" "))

//end-here
});
