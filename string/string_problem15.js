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
let numarr = ["0","1","2","3","4","5","6","7","8","9"]
let digitarr = []

for(let i=0;i<sarr.length;i++){
    if(numarr.includes(sarr[i])){
        digitarr.push(+sarr[i])
        sarr.splice(i,1)
        i--;
    }else{
        // pass
    }
}
let sum = 0;
for(i of digitarr){
    sum += i
}
sarr.push(sum)
console.log(sarr.join(''))




//end-here
});
