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
let mystr = userInput[0].split("")

if(mystr.length%2 ===1){
    console.log(0)
}else{
    let flag = true
    for(let index=0;index<mystr.length;index++){
        if (mystr[index] !== mystr[mystr.length-1-index]){
            flag = false
        }
    }
    if(!flag){
        console.log(1)
    }
}
//end-here
});
