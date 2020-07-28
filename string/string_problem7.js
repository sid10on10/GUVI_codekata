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
let operation = +userInput[1]
let where = +userInput[2]
mystring.splice(0,0,undefined) // trick



for(let index=where;index<mystring.length;index+=where){
    if(operation === 1){
        mystring.splice(index,1,mystring[index].toLowerCase())
    }else{
        mystring.splice(index,1,mystring[index].toUpperCase())
    }
    
}
mystring.shift()

console.log(mystring.join(""))

// GuviGeek
//end-here
});
