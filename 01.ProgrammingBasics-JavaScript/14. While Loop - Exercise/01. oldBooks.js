function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;
    checkedBooks = 0;

    while(index < input.length) {
        let isEqual = input[index];
        
        if(isEqual === favouriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        }else if(isEqual === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${checkedBooks} books.`);
            break;
        }
        index++;
        checkedBooks++;
    }

}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);

oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);