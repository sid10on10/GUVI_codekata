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
function wordToletter(word){
    let strarr = word.split("")
    let myobj = {}
    for(i of strarr){
        if(i in myobj){
            myobj[i]++;
        }else{
            myobj[i]=1
        }
    }
    return Object.keys(myobj).sort()
}
let [str1,str2] = userInput[0].split(" ")

if(wordToletter(str1).join("")===wordToletter(str2).join("")){
    console.log(true)
}else{
    console.log(false)
}


  //end-here
});