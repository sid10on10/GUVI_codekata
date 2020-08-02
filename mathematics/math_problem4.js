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
let nandm = userInput[0].split(" ").map(val => +val)
let n = nandm[0]
let m = nandm[1]
let flag = false

function gcd(value1,value2){
    while(value2!==0){
        [value1,value2] = [value2,value1%value2]
    }
    return value1
}

if (gcd(n,m) === 1){
    console.log(1)
}else{
    console.log(0)
}



//end-here
});
