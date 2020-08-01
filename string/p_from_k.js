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
let nandpandk = userInput[0].split(" ")
let n = nandpandk[0]
let p = +nandpandk[1]
let k = +nandpandk[2]

let narr = n.split("")
narr.unshift(0)
console.log(+narr[p+k])

  //end-here
});