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
let m = +userInput[2]
let checknums = userInput[3].split(" ").map(val=>+val)
let myobj = {}

for(i of numbers){
    if (i in myobj){
        myobj[i] += 1
    }else{
        myobj[i] = 1
    }
}

let outarr = []
for(j of checknums){
    if(j in myobj){
        outarr.push(myobj[j])
    }else{
        outarr.push("Not Present")
    }
}
console.log(outarr.join(" "))


//end-here
});
