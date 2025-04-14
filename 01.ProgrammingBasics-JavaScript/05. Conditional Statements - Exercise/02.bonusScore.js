function bonusScore(startPoints) {
    let bonus = 0;

    if(startPoints <= 100) {
        bonus = 5;
    }else if(startPoints > 100 && startPoints <= 1000) {
        bonus = startPoints * 0.20;
    }else if(startPoints > 1000) {
        bonus = startPoints * 0.10;
    }

    if(startPoints % 2 === 0) {
        bonus += 1;
    }else if(startPoints % 10 === 5) {
        bonus += 2;
    }

    let totalPoints = startPoints + bonus;

    console.log(bonus);
    console.log(totalPoints);
}

bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15875);