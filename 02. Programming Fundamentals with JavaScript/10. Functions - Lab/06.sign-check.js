function signChecker(numOne, numTwo, numThree) {

    if(numOne < 0 && numTwo >= 0 && numThree >= 0) {
        return 'Negative';
    }else if(numOne < 0 && numTwo < 0 && numThree >=0) {
        return 'Positive';
    }else if(numOne < 0 && numTwo < 0 && numThree < 0) {
        return 'Negative';
    } else if(numOne >= 0 && numTwo < 0 && numThree >= 0) {
        return 'Negative';
    }else if((numOne >= 0 && numTwo < 0 && numThree < 0)) {
        return 'Positive';
    }else if(numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        return 'Positive';
    }else if(numOne >=0 && numTwo >= 0 && numThree < 0) {
        return 'Negative'
    }else if(numOne < 0 && numTwo < 0 && numThree >= 0) {
        return 'Positive';
    }
}

console.log(signChecker(5, 12, -15));
console.log(signChecker(-6, -12, 14));
console.log(signChecker(-1, -2, -3));
console.log(signChecker(-5, 1, 1));
