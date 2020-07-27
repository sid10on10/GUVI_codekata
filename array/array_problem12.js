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
let mynum = userInput[0].split("").map(val=>+val)
let odd = []

for (i of mynum){
    if ( i === 1 || i%2 === 1){
        odd.push(i)
    }
}
if (odd.length < 1){
    console.log(-1)
}else{
    console.log(odd.join(" "))
}


//end-here
});
