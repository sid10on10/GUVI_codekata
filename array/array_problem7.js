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
let n = +userInput[0];
let numbers = userInput[1].split(" ").map(val=>+val)

let myobj = {}
let myarr = []

for(number of numbers){
    if (number in myobj){
        myobj[number] += 1
    }else{
        myobj[number] = 1
    }
}

let keys = Object.keys(myobj)

for (i of keys){
    let obj = {
        "value":i,
        "count":myobj[i]
    }
    myarr.push(obj)
}

myarr = myarr.sort(function(val1 , val2){
    if(val1.count !== val2.count){
        return val1.count - val2.count;
    }else{
        return val1.value - val2.value;
    }
});
let outarr = []

for(i of myarr){
    outarr.push(i["value"])
}
console.log(outarr.join(" "))


//end-here
});
