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
let strarr = userInput[0].split("")
let myobj = {};

for(i of strarr){
    if(i in myobj){
        myobj[i]++
    }else{
        myobj[i] = 1
    }
}

let myarr = []
for(i of Object.keys(myobj)){
    myarr.push({
        "value":i,
        "count":myobj[i]
    })
}

let duplicates = myarr.filter((a)=>a.count>1)
let outarr = []

for(i of duplicates){
    outarr.push(i.value)
}
if( duplicates.length === 0 ){
    console.log(-1)
}else{
    console.log(outarr.join(" "))
}



  
  

  //end-here
});