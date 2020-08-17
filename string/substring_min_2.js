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
let str1arr = str1.split("")

let common_subs = []

for(let i=0;i<str1.length;i++){
    for(let j=i+1;j<str1.length+1;j++){
        if(str2.search(str1arr.slice(i,j).join(""))!=-1){
            common_subs.push(str1arr.slice(i,j))
        }
    }
}
let outarr = common_subs.filter((data)=>data.length>1)
if(outarr.length==0){
    console.log("no")
}else{
    console.log("yes")
}

  //end-here
});