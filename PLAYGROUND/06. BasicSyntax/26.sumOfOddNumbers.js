function oddNumsSum(num) {
  let sum = 0;
  let oddNums = 1;
  for (let i = 1; oddNums <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      sum += i;
      oddNums++;
    }
  }

  console.log(`Sum: ${sum}`);
}

oddNumsSum(5);
console.log("------------");
oddNumsSum(3);
