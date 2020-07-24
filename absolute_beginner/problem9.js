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
const month = +userInput[0]
if ( 1<=month && month<=12){
    if (month===2){
        console.log(28)
    } else if (month===1||month===3||month===5||month===7||month===8||month===10||month===12){
        console.log(31)
    } else{
        console.log(30)
    }
} else {
    console.log("Error")
}
//end-here
});
