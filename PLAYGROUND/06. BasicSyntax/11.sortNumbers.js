function sortNumbers(numOne, numTwo, numThree) {
    if(numOne >= numTwo && numOne >= numThree) {
        console.log(numOne);
        if(numTwo >= numThree) {
            console.log(numTwo);
            console.log(numThree);
        }else {
            console.log(numThree);
            console.log(numTwo);
        }
    }else if(numTwo >= numOne && numTwo >= numThree) {
         console.log(numTwo);
         if(numOne >= numThree) {
            console.log(numOne);
            console.log(numThree);
        }else {
            console.log(numThree);
            console.log(numOne);
        }
    }else {
        console.log(numThree);
        if(numOne >= numTwo) {
            console.log(numOne);
            console.log(numTwo);
        }else {
            console.log(numTwo);
            console.log(numOne);
        } 
    }
}

sortNumbers(2, 1, 3);
console.log('-----------');
sortNumbers(-2, 1, 3);
console.log('-----------');
sortNumbers(0, 0, 2);