function circleAreaAndPerimeter(param1) {
    let r = Number(param1);

    let area = Math.PI * Math.pow(r, 2);
    let perimeter = 2 * Math.PI * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaAndPerimeter(3);
circleAreaAndPerimeter(4.5);