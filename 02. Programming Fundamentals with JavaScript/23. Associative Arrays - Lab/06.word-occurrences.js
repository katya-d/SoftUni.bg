function solve(input) {
  let words = new Map();

  let count = 1;

  for (let word of input) {
    if (words.has(word)) {
      let newCount = words.get(word);
      newCount++;
      words.set(word, newCount);
    } else {
      words.set(word, count);
    }
  }

  let sortedWords = Array.from(words.entries()).sort((a, b) => b[1] - a[1]);

  for (let [word, occursNumber] of sortedWords) {
    console.log(`${word} -> ${occursNumber} times`);
  }
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
console.log("-----------------------------");
solve(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
