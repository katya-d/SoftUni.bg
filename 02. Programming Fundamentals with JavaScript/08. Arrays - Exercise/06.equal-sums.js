function equalSums(arr) {  
    let leftSum = 0; 
    let rightSum = 0;
    let currentIndex;

    for(let i = 0; i < arr.length; i++) {

        for(let k = 0; k < i; k++) {
            let leftNum = arr[k];
            leftSum += leftNum;
        }

        for(let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];
            rightSum += rightNum;
        }

        if(leftSum === rightSum) {
            currentIndex = i;
            break;
        }

        leftSum = 0;
        rightSum = 0;
    }

    if(currentIndex >= 0) {
        console.log(currentIndex);
    }else {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);