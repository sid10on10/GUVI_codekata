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
let mystring = userInput[0].split("")
let sum = 0;
let numbers = [0,1,2,3,4,5,6,7,8,9]


for( str of mystring){
    if (numbers.includes(+str)){
        sum += +str
    }else{
        // pass
    }
}
console.log(sum)


//end-here
});
