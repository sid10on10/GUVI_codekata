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
let sarr = userInput[0].split("")
let myobj = {}

for(i of sarr){
    if(i in myobj){
        myobj[i]++
    }else{
        myobj[i] = 1
    }
}

if(Object.keys(myobj).length === 3){
    console.log("Wonder")
}else{
    console.log(-1)
}



//end-here
});
