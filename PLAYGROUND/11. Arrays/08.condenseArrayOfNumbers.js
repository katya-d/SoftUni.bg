function condenseArrayOfNumbers(arr) {
  let sum = 0;
  
  if (arr.length === 1) {
    console.log(`${arr[0]}`);
    return;
  }

    let newArray = [];

  while (true) {
    for(let i = 0; i < arr.length - 1; i++) {
        let firstNum = Number(arr[i]);
        let secondNum = Number(arr[i + 1]);

        sum = firstNum + secondNum;
        newArray.push(sum);
    }

    if(newArray.length === 1) {
        console.log(sum);
        break;
    }else {

        arr = newArray;
        newArray = [];
    }
  }
}

condenseArrayOfNumbers([2, 10, 3]);
condenseArrayOfNumbers([5, 0, 4, 1, 2]);
condenseArrayOfNumbers([1]);
