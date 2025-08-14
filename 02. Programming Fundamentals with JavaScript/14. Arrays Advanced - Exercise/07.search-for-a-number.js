function search(inputOne, inputTwo) {
    let takedElements = Number(inputTwo[0]);
    let deletedCount = Number(inputTwo[1]);
    let searchedNumber = Number(inputTwo[2]);

    let manipulatedArray = inputOne.slice(0, takedElements);

    manipulatedArray.splice(0, deletedCount);

    let filteredArray = manipulatedArray.filter(num => num === searchedNumber);

    let occursTimesCounts = filteredArray.length;

    console.log(`Number ${searchedNumber} occurs ${occursTimesCounts} times.`);
}

search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
search([7, 1, 5, 8, 2, 7], [3, 1, 5]);
