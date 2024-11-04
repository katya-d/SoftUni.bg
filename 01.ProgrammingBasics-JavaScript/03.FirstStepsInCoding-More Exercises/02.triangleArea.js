function triangleArea(param1, param2) {
    let side = Number(param1);
    let height = Number(param2);

    let area = side * height / 2;

    console.log(area.toFixed(2));
}

triangleArea(20, 30);
triangleArea(15, 35);
triangleArea(7.75, 8.45);
triangleArea(1.23456, 4.56789);