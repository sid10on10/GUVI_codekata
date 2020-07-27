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
let string = userInput[1].split(" ")

for(let i=0;i<n;i++){
    for(let j =i+1;j<n-1;j++){
        if(string[i]===string[j]){
            string.splice(j,1);
            j--;
        }
    }
}
console.log(string.join(" "))


//end-here
});
