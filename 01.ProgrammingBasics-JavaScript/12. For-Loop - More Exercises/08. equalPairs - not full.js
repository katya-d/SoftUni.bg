function equalPairs(input) {
    let numberPairsArray = [];

    for(let i = 0; i < input.length; i++) {
        let firstNum = Number(input[i]);
        let secondNum = Number(input[i + 1]);
        let firstSum = firstNum + secondNum;
       

        let thirdNum = Number(input[i]);
        let fourthNum = Number(input[i + 1]);

        let secondSum = thirdNum + fourthNum;
     
        if(firstSum === secondSum) {
            numberPairsArray.push(firstSum);
        }
    }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
console.log("------------------");
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
console.log("------------------");
equalPairs(["2", "-1", "0", "0", "-1"]);
console.log("------------------");
equalPairs(["2", "1", "2", "2", "2"]);
console.log("------------------");
equalPairs(["1", "5", "5"]);
console.log("------------------");
equalPairs(["2", "-1", "2", "0", "-1"]);
