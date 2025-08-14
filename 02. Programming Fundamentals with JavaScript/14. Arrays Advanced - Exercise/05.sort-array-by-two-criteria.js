function sortArray(data) {
  let sorted = data.sort((a, b) => {
    let lengthSorting = a.length - b.length;

    if(lengthSorting !== 0) {
        return lengthSorting;
    }else {
        return a.localeCompare(b);
    }
  });

  console.log(sorted.join(`\n`));
}

// sortArray(["alpha", "beta", "gamma"]);
// sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArray(["test", "Deny", "omen", "Default"]);
