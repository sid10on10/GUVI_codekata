// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let n = +userInput[0]
let nums = userInput[1].split(" ").map(val=>+val)
let myobj = {}
nums.map((each,i)=>{
    myobj[each]=i
    
})

//console.log(myobj)

function evenarr(arr){
    let outarr = []
    for(let i=1;i<=arr.length;i++){
        if(i%2==0){
            outarr.push(arr[i-1])
        }
    }
    return outarr
}

let result;
result = evenarr(nums)

while(result.length>1){
    result = evenarr(result)
}
console.log(myobj[result[0]])


  //end-here
});