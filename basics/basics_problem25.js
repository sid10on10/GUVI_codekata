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
let minindex = 1
let maxindex = 1
numbers.unshift(undefined)
let min = numbers[1]
let max = numbers[1]

for(let index=1;index<numbers.length;index++){
    if( numbers[index] < min ){
        min = numbers[index]
        minindex = index
    }else if( numbers[index] > max){
        max = numbers[index]
        maxindex = index
    }
}
console.log(minindex,maxindex)


//end-here
});
