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
let bol = false
for (let i=2;i<n;i++){
    if (n%i === 0){
        bol = true
    }
}

if(bol){
    console.log("yes")
}else{
    console.log("no")
}



//end-here
});
