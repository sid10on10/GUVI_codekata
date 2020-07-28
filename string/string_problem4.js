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
var arr = userInput[0].split("")
for (let index=0;index<arr.length;index++){
    if (arr[index]===arr[index+1]){
        arr.splice(index,2)
    }
}
console.log(arr.join(""))
//end-here
});
