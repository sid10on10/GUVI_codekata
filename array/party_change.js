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
let years = userInput[1].split(" ").map(val=>+val)
let parties = userInput[2].split(" ")
let myarr = []

for(let i=0;i<n;i++){
    myarr.push({
        "year":years[i],
        "party":parties[i]
    })
}
myarr.sort((a,b)=>a.year-b.year)
let outarr = []
for(let i=1;i<n;i++){
    if(myarr[i]["party"]!=myarr[i-1]["party"]){
        outarr.push(myarr[i]["year"])
    }
}
for(i of outarr){
    console.log(i)
}

  //end-here
});