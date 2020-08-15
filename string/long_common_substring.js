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
let [str1,str2] = userInput[0].split(" ")
let str2arr = str2.split("")

let common_subs = []

for(let i=0;i<str2.length;i++){
    for(let j=i+1;j<str2.length+1;j++){
        if(str1.search(str2arr.slice(i,j).join(""))!=-1){
            common_subs.push(str2arr.slice(i,j))
        }
    }
}

common_subs.sort((a,b)=>b.length-a.length)
console.log(common_subs[0].join(""))

  //end-here
});