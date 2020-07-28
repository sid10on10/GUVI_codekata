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
let mystring = userInput[0].split(" ")

for (let index=0;index<mystring.length;index++){
    if ( mystring[index] === mystring[index+1] ){
        mystring.splice(index,2);
        index -= 2;
    }
}
console.log(mystring.join(" "))



//end-here
});
