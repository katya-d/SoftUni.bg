function sumSeconds(firstTime, secondTime, thirdTime) {
    let secondsSum = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(secondsSum / 60);
    let seconds = secondsSum % 60;

    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(35, 45, 44);
sumSeconds(22, 7, 34);
sumSeconds(50, 50, 49);
sumSeconds(14, 12, 10);