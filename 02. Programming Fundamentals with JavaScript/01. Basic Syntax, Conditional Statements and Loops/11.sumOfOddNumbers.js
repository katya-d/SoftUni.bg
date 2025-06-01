function sumOfOddNumbers(num) {
    let sum = 0;
    let index = 1;
    let oddNum = 1;

    while(index <= num) {
        
        if(oddNum % 2 !== 0) {
            console.log(oddNum);
            sum += oddNum;
            
        }
        oddNum += 2;
        index++;
     }
     console.log(`Sum: ${sum}`);   
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);