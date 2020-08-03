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
let nums = userInput[0].split("").map(val=>+val)
let myobj = {}

for(i of nums){
    if(i in myobj){
        myobj[i]++
    }else{
        myobj[i] = 1
    }
}

if(Object.keys(myobj).length === 2){
    console.log("Saturated")
}else{
    console.log("Unsaturday")
}


//end-here
});
