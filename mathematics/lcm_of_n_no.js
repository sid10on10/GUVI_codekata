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
function gcd2(a, b) {
  // Greatest common divisor of 2 integers
  if(b===0)
  { 
      return a
  }else{
      return gcd2(b,a%b)
  }
 
}

function lcm2(a, b) {
  // Least common multiple of 2 integers
  return a*b / gcd2(a, b);
}

function lcm(array) {
  // Least common multiple of a list of integers
  var n = 1;
  for(var i=0; i<array.length; ++i)
    n = lcm2(array[i], n);
  return n;
}

let nums = userInput[1].split(" ").map(val=>+val)
let res = lcm(nums)
console.log(res)





  //end-here
});