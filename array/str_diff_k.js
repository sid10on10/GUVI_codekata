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
let arr = userInput[0].split(" ")
let str1 = arr[0]
let str2 = arr[1]
let k = +arr[2]

function diffChecker(str1,str2){
    let diff = []
    if(str1.length>str2.length){
        for(i of str1.split("")){
            if(str2.includes(i)==false){
                diff.push(i)
            }
        }
        return diff.length
    }else{
        for(i of str1.split("")){
            if(str2.includes(i)==false){
                diff.push(i)
            }
        }
        return diff.length
        
    }
}
if(diffChecker(str1,str2)==k){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});