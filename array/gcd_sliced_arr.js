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
function gcd(a,b){
    if(b===0){
        return a
    }else{
        return gcd(b,a%b)
    }
}
function gcd2(arr){
    let result = arr[0]
    for(let i=0;i<arr.length;i++){
        result = gcd(arr[i],result)
    }
    return result
}

let nums = userInput[1].split(" ").map(val=>+val)
let [n,k] = userInput[0].split(" ").map(val=>+val)
for(let i=2;i<2+k;i++){
    let arr = userInput[i].split(" ").map(val=>+val)
    let slicedarr = nums.slice(arr[0]-1,arr[1])
    if(slicedarr.length==1){
        console.log(slicedarr[0])
    }else{
    let result = gcd2(slicedarr)
    console.log(result)
    }
}

  //end-here
});