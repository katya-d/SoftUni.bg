function trainingLab(param1, param2) {
    let lenght = Number(param1);
    let height = Number(param2);

    let lengthToCm = lenght * 100;
    let heightToCm = (height * 100) - 100;

    let rowDesks = Math.floor(heightToCm / 70);
    let rows = Math.floor(lengthToCm / 120);

    let totalSpace = rows * rowDesks - 3;

    console.log(totalSpace)
}

trainingLab(15, 8.9);
trainingLab(8.4, 5.2);