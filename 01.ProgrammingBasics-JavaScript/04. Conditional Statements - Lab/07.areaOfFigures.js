function areaOfFigures(figureType, sizeOne, sizeTwo) {
    let area = 0;
    if(figureType === "square") {
        let length = sizeOne;
        area = Math.pow(length, 2);
    }else if(figureType === "rectangle") {
        let length = sizeOne;
        let width = sizeTwo;

        area = length * width;
    }else if(figureType === "circle") {
        let radius = sizeOne;

        area = Math.PI * Math.pow(radius, 2);
    }else if(figureType === "triangle") {
        let length = sizeOne;
        let heigth = sizeTwo;

        area = length * (heigth / 2);
    }

    console.log(area.toFixed(3));
}

areaOfFigures("square", 5);
areaOfFigures("rectangle", 7, 2.5);
areaOfFigures("circle", 6);
areaOfFigures("triangle", 4.5, 20);