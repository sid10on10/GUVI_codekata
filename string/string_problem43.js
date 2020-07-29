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
let strarr = userInput[0].split(" ")
let str1 = strarr[0].split("")
let str2 = strarr[1].split("")

for(i of str2){
    let index = str1.indexOf(i)
    if(index!==-1){
        str1.splice(index,1)
    }else{
        // pass
    }
}
if(str1.length!==0){
    console.log(str1.join(""))
}else{
    console.log(-1)
}

  //end-here
});