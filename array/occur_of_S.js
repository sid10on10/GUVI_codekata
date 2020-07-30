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
let strs = userInput[0].split(" ")
let search = userInput[1]
let count = 0

for(i of strs){
    if(i === search){
        count++
    }
}
if(!count){
    console.log(-1)
}else{
    console.log(count)
}





//end-here
});
