function oddEvenSum(num) {
    let numToString = String(num);
    let evenNumbersSum = 0;
    let oddNumbersSum = 0;

    for(let i = 0; i < numToString.length; i++) {
        let extractedNumber = Number(numToString[i]);

        if(extractedNumber % 2 === 0) {
            evenNumbersSum += extractedNumber;
        }else {
            oddNumbersSum += extractedNumber;
        }
    }

    console.log(`Odd sum = ${oddNumbersSum}, Even sum = ${evenNumbersSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);