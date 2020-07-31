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
let str1,str2;
[str1,str2] = userInput[0].split(" ")

function IsPalindrome(string){
    let strarr = string.split("").reverse()
    if(strarr.join("")===string){
        return true
    }else{
        return false
    }
}

function Isanagram(string1,string2){
    let str1 = string1.split("").sort()
    let str2 = string2.split("").sort()
    if(str1.join("")===str2.join("")){
        return true
    }else{
        return false
    }
}

if(IsPalindrome(str1)&&IsPalindrome(str2)&&Isanagram(str1,str2)){
    console.log(1)
}else{
    console.log(0)
}

  //end-here
});