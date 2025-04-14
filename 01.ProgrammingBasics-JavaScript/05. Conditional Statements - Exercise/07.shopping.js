function shopping(peterBudget, videocardsNumber, processorsNumber, ramMemoryNumbers) {

    let videocardsPrice = videocardsNumber * 250;
    let processorsPrice = processorsNumber * (0.35 * videocardsPrice);
    let ramMemoryPrice = ramMemoryNumbers * (0.10 * videocardsPrice);

    let totalPrice = videocardsPrice + processorsPrice + ramMemoryPrice;

    if(videocardsNumber > processorsNumber) {
        totalPrice -= (totalPrice * 0.15);
    }

    let difference = peterBudget - totalPrice;

    if(difference >= 0) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    }else {
        difference *= (-1);
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
    }
}

shopping(900, 2, 1, 3);
shopping(920.45, 3, 1, 1);