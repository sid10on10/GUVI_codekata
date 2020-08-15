// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let str1 = userInput[0]
let str2 = userInput[1]

if(str1.length>str2.length){
    if(str1.search(str2)!=-1){
        console.log(str1.search(str2)+1)
    }else{
        console.log(-1)
    }
}else{
    if(str2.search(str1)!=-1){
        console.log(str2.search(str1)+1)
    }else{
        console.log(-1)
    }
}

  //end-here
});