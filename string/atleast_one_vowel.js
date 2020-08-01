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
let n = +userInput[0]
let strings = []

for(let i=1;i<n+1;i++){
    strings.push(userInput[i])
}

function hasVowel(string){
    let vowels = ['a','e','i','o','u']
    let strarr = string.split("")
    for(i of vowels){
        if(strarr.includes(i)){
            return true
            break
        }
    }
    return false
}

let bool = strings.every(hasVowel)
if(bool){
    console.log("yes")
}else{
    console.log("no")
}



  //end-here
});