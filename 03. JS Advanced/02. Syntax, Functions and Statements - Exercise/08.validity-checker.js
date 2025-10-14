function validityChecker(x1, y1, x2, y2) {

    let distance1 = Math.pow(x1, 2) + Math.pow(y1, 2);
    if (Number.isInteger(Math.sqrt(distance1))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let distance2 = Math.pow(x2, 2) + Math.pow(y2, 2);
    if (Number.isInteger(Math.sqrt(distance2))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    let dx = x2 - x1;
    let dy = y2 - y1;
    let distanceBetweenPoints = Math.pow(dx, 2) + Math.pow(dy, 2);
    if (Number.isInteger(Math.sqrt(distanceBetweenPoints))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);