function triangleArea(sideOne, sideTwo, sideThree) {
    let semiperimeter = (1/2) * (sideOne + sideTwo + sideThree);

    let area = Math.sqrt(semiperimeter * (semiperimeter - sideOne) * (semiperimeter - sideTwo) * (semiperimeter - sideThree));

    console.log(area);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
