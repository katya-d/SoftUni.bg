function printDna(num) {
  let sequence = "ATCGTTAGGG";
  let arr = sequence.split("");

  let pairs = [];
  let pair = "";
  let newArr = arr;
  for (let i = 0; i < 5; i++) {
    let firstChar = newArr.shift();
    let secondChar = newArr.shift();

    pair += firstChar + secondChar;

    pairs.push(pair);

    pair = "";
  }

  for (let j = 0; j < num; j++) {
    let pairFromArray = pairs[j % pairs.length];
    let firstPairChar = pairFromArray[0];
    let secondPairChar = pairFromArray[1];

    let shape = j % 4;

    if (shape === 0) {
      console.log(`**${pairFromArray}**`);
    } else if (shape === 1 || shape === 3) {
      console.log(`*${firstPairChar}--${secondPairChar}*`);
    } else {
      console.log(`${firstPairChar}----${secondPairChar}`);
    }
  }
}

printDna(10);
