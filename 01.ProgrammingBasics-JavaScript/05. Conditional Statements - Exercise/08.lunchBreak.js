function lunchBreak(tvShowName, episodeDuration, breakDuration) {
    let lunchTime = breakDuration * (1/8);
    let breakTime = breakDuration * (1/4);

    let totalTime = lunchTime + breakTime + episodeDuration;

    let difference = breakDuration - totalTime;

    if(difference >= 0) {
        console.log(`You have enough time to watch ${tvShowName} and left with ${Math.ceil(difference)} minutes free time.`);
    }else {
        difference *= (-1);
        console.log(`You don't have enough time to watch ${tvShowName}, you need ${Math.ceil(difference)} more minutes.`);
    }
}

lunchBreak("Game of Thrones", 60, 96);
lunchBreak("Teen Wolf", 48, 60);