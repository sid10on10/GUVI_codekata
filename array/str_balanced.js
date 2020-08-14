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
let s = userInput[0].split("")
function balanced(arr){
    if(arr.length%2==0){
        let flag = true
        for(let i=0;i<arr.length;i++){
            if(arr[i]=="("){
                if(arr[arr.length-1-i] != ")"){
                    return false
                }
            }else if(arr[i]==")"){
                if(arr[arr.length-1-i] != "("){
                    return false
                }
            }
        }
        return true
    }else{
        return false
    }
}

if(balanced(s)){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});