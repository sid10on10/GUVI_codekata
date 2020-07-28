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
let strings = []
for(let i=1;i<n+1;i++){
    strings.push(userInput[i])
}

let flag = false

for(i of strings){
    let revstr = i.split(" ").slice().reverse().join(" ")
    if(strings.includes(revstr)){
        flag = true
    }else{
        // pass
    }
}

if(flag){
    console.log("YES")
}else{
    console.log("NO")
}




//end-here
});
