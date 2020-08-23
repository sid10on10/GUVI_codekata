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
function check(arr,k,arr2){
        for(i of arr){
            if(!arr2.includes(i)){
                return false
            }
        }
        return true
}

let [str,k] = userInput[0].split(" ")
k = +k

let myarr = str.split("").map(val=>+val)
let arr = []
for(let i=0;i<k+1;i++){
    arr.push(i)
}

if(check(arr,+k,myarr)){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});