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
let mystring = userInput[0].split("")
let vowels = ["a","e","i","o","u"]
let flag = false

for (str of mystring){
    if (vowels.includes(str)){
        flag=true
    }
}
if(flag){
    console.log("yes")
}else{
    console.log("no")
}



//end-here
});
