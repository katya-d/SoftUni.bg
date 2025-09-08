function solve(sentence) {
  let wordsArray = sentence.toLowerCase().split(" ").map(String);

  let wordsMap = new Map();

  for (let word of wordsArray) {
    if (!wordsMap.get(word)) {
      wordsMap.set(word, 1);
    } else {
      let newValue = Number(wordsMap.get(word)) + 1;
      wordsMap.set(word, newValue);
    }
  }

  let occurrencesWords = new Set();

  for (let [word, count] of wordsMap) {
    if (count % 2 !== 0) {
      occurrencesWords.add(word);
    }
  }

  console.log(Array.from(occurrencesWords).join(" "));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
console.log("----------------------");
solve("Cake IS SWEET is Soft CAKE sweet Food");
