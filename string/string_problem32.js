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
let votesarr = userInput[0].split(" ")
let myobj = {}

for(i of votesarr){
    if(i in myobj){
        myobj[i]++
    }else{
        myobj[i] = 1
    }
}
let keys = Object.keys(myobj)
let myarr= []

for(i of keys){
    myarr.push({
        "value":i,
        "count":myobj[i]
    })
}
myarr.sort((a,b)=>b.count-a.count)
let max_votes = +myarr[0]["count"]

let filterarray = myarr.filter((a)=>a.count==max_votes)
let sortedarray = filterarray.sort((a,b)=>a.value-b.value)
console.log(sortedarray[0]["value"],sortedarray[0]["count"])




  //end-here
});