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
let binnum = userInput[0].split("").map(val=>+val)
let outarray = []

for(let index=0;index<binnum.length;index++){
    let next = binnum[index+1]
    let i = 0;
    if (binnum[index] === 1){
        let count = 0;
        while(binnum[index+i]){
        count++;
        i++;
    }
    if(count){
        outarray.push(count)
    }
    }
}
outarray.sort((a,b) => b-a)
if (outarray[0]){
    console.log(outarray[0])
}else{
    console.log(-1)
}





//end-here
});
