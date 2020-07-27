const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let n = +userInput[0]
let nums = userInput[1].split(" ").map(val=>+val)
let myobj = {}

for(i of nums){
    if(i in myobj){
        myobj[i]++
    }else{
        myobj[i] = 1
    }
}

let mykeys = Object.keys(myobj)
let myarr = []
for(i of mykeys){
    myarr.push({
        "value":i,
        "count":myobj[i]
    })
}
myarr.sort((a,b)=>a.count-b.count)
let leastcount = myarr[0]["count"]
myarr.filter(a=>a.count===leastcount)
let filterarr = myarr.filter(a=>a.count===leastcount).sort((a,b)=>b.value-a.value)
let outarr = []
for(i of filterarr){
    outarr.push(i.value)
}
console.log(outarr.join(" "))




//end-here
});
