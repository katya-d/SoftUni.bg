function solve(data) {
    let numbers = data
    .shift()
    .split(' ')
    .map(Number);

    for(let i = 0; i < data.length; i++) {
        let parts = data[i].split(' ');

        let command = parts.shift();

        if(command === 'swap') {
          let indexOne = Number(parts[0]);
          let indexTwo = Number(parts[1]);

          let valueOne = numbers[indexOne];
          let valueTwo = numbers[indexTwo];

          numbers[indexTwo] = valueOne;
          numbers[indexOne] = valueTwo;

        }else if(command === 'multiply') {
          let indexOne = Number(parts[0]);
          let indexTwo = Number(parts[1]);

          let valueOne = numbers[indexOne];
          let valueTwo = numbers[indexTwo];

          let multiplyResult = valueOne * valueTwo;

          numbers.splice(indexOne, 1, multiplyResult)
        }else if(command === 'decrease') {
          numbers = numbers.map(x => x - 1);
        }else if(command === 'end') {
          break;
        }
    }
        
    console.log(numbers.join(', '));
}

solve([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
solve([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
