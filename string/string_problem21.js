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
let str = userInput[0].split("")
let flag = false
let newarray = str.slice().reverse();

if(newarray.join("") === str.join("")){
    flag=true
}


if(flag){
    console.log(1)
}else{
    console.log(0)
}




//end-here
});
