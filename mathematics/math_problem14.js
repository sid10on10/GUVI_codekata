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

for(i of numbers){
    for(let j=1;j<i;j++){
        if(j**3+(j+1)**3===i){
            outarr.push(i)
        }
    }
}
outarr.sort((a,b)=>a-b)

if(outarr.length===0){
    console.log(-1)
}else{
    console.log(outarr.join(" "))
}


//end-here
});
