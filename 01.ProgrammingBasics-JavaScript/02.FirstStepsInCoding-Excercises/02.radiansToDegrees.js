function angleConverter(param1) {
    let radAngle = Number(param1);

    let radToDegFormula = radAngle * 180 / Math.PI;

    console.log(radToDegFormula);
}

angleConverter(3.1416);
angleConverter(6.2832);