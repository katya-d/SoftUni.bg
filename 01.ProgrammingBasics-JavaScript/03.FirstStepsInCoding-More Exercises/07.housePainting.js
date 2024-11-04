function housePainting(param1, param2, param3) {
    let houseHeight = Number(param1);
    let wallLenght = Number(param2);
    let triangleWallHeight = Number(param3);

    //Walls
    let sideWall = houseHeight * wallLenght;
    let windowArea = 1.5 * 1.5;
    let twoSides = (2 * sideWall) - (2 * windowArea);

    let backWall = houseHeight * houseHeight;
    let frontAndBackWall = 2 * backWall - 2.4;

    let totalWallArea = twoSides + frontAndBackWall;
    let greenPaint = totalWallArea / 3.4;

    //ROOF

    let roofRectangles = 2 * (houseHeight * wallLenght);
    let roofTriangles = 2 * (houseHeight * triangleWallHeight / 2);
    
    let roofArea = roofRectangles + roofTriangles;

    let redPaint = roofArea / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(6, 10, 5.2);
housePainting(10.25, 15.45, 8.88);