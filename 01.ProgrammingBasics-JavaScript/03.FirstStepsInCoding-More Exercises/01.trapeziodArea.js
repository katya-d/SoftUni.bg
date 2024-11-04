function trapezoidArea(param1, param2, param3) {
    let b1 = Number(param1);
    let b2 = Number(param2);
    let h = Number(param3);

    let result = (b1 + b2) * h / 2;

    console.log(result.toFixed(2));
}

trapezoidArea(8, 13, 7);