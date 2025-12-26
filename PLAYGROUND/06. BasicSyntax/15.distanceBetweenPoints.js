function distanceBetweenPoints(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;

    let xPow = Math.pow(x, 2);
    let yPow = Math.pow(y, 2);

    let distance = Math.sqrt(xPow + yPow);

    console.log(distance)
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);