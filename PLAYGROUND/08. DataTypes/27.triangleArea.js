function triangleArea(firstSide, secondSide, thirdSide) {
    let semiperimeter = (1/2) * (firstSide + secondSide + thirdSide);

    let area = Math.sqrt(semiperimeter * (semiperimeter - firstSide) * (semiperimeter - secondSide) * (semiperimeter - thirdSide));

    console.log(area);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
