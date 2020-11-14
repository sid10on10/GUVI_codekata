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
let [n,sum] = userInput[0].split(" ").map(val=>+val)
let coins = userInput[1].split(" ").map(val=>+val)

coins.sort((a,b)=>b-a)


function minCoins(coins,sum){
    let no_of_coins = 0
    for(i of coins){
        while(sum>=i){
            sum = sum-i
            no_of_coins++;
        }
    }
    return no_of_coins
}

console.log(minCoins(coins,sum))
  //end-here
});