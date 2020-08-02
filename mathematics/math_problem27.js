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
let month = +userInput[0]
let savingsarr = [1000,2000]
let savings = 1000

if(month===1){
    console.log(2000)
}else if(month===2){
    console.log(4000)
}else{
    for(let i=2;i<month;i++){
        savingsarr.push(savingsarr[i-1]+savingsarr[i-2])
    }
    for(i of savingsarr){
        savings+=i
    }
    console.log(savings)
}


//end-here
});
