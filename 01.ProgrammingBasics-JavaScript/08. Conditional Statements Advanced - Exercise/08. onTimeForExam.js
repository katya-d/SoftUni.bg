function onTimeForExam(examHour, examMinutes, commingHour, commingMinutes) {

    let status = "";

    //Convert examHours to Minutes
    let totalExamMinutes = (examHour * 60) + examMinutes;

    //Convert comming Hours to Minutes
    let totalCommingMinutes = (commingHour * 60) + commingMinutes;

    let isOnTime = totalExamMinutes - totalCommingMinutes;
    let newHours = Math.trunc(isOnTime / 60);
    let newMinutes = isOnTime % 60;
    if(isOnTime < 0) {
        status = "Late";
    }else if(isOnTime >= 0 && isOnTime <= 30) {
        status = "On time";
    }else if(isOnTime) {
        status = "Early";
    }

    console.log(status);
    if (isOnTime < 0) {
        isOnTime = Math.abs(isOnTime);
        newHours = Math.trunc(isOnTime / 60);
        newMinutes = isOnTime % 60;

        if (isOnTime >= 60) {
            if (newMinutes < 10) {
                console.log(`${newHours}:0${newMinutes} hours after the start`);
            } else {
                console.log(`${newHours}:${newMinutes} hours after the start`);
            }
        } else {
            console.log(`${isOnTime} minutes after the start`);
        }
    } else if (isOnTime > 0) {
        newHours = Math.trunc(isOnTime / 60);
        newMinutes = isOnTime % 60;

        if (isOnTime >= 60) {
            if (newMinutes < 10) {
                console.log(`${newHours}:0${newMinutes} hours before the start`);
            } else {
                console.log(`${newHours}:${newMinutes} hours before the start`);
            }
        } else {
            console.log(`${isOnTime} minutes before the start`);
        }
    }
}

onTimeForExam(9, 30, 9, 50);
onTimeForExam(9, 0, 8, 30);
onTimeForExam(16, 0, 15, 0);
onTimeForExam(9, 0, 10, 30);
onTimeForExam(14, 0, 13, 55);
onTimeForExam(11, 30, 8, 12);
onTimeForExam(10, 0, 10, 0);
onTimeForExam(11, 30, 10, 55);
onTimeForExam(11, 30, 12, 29);
