function distinctArray(input) {
  let result = [];
  let duplicates = [];
  let duplicateIndexes = [];

  for (let i = 0; i < input.length; i++) {
    let num = input[i];
    let alreadyInResult = false;

    // Check if num is already in result
    for (let j = 0; j < result.length; j++) {
      if (result[j] === num) {
        alreadyInResult = true;
        break;
      }
    }

    if (!alreadyInResult) {
      result.push(num);
    } else {
      duplicates.push(num);
      duplicateIndexes.push(i);
    }
  }

  console.log(result.join(' '));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);