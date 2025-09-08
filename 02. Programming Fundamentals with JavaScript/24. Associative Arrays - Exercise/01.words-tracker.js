function wordsTracker(input) {
  let tracker = {};
  let searchedWords = input.shift().split(" ");

  for (let word of searchedWords) {
    tracker[word] = 0;
  }

  for (let word of input) {
    if (tracker.hasOwnProperty(word)) {
      tracker[word]++;
    }
  }

  let sortArray = [];

  for (let word in tracker) {
    sortArray.push([word, tracker[word]]);
  }

  let sortedWords = sortArray.sort((a, b) => b[1] - a[1]);

  for (let line of sortedWords) {
    let [word, count] = line;
    count = Number(count);

    console.log(`${word} - ${count}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
console.log("-------------------");
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
