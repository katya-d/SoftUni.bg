function circleArea(param) {
  let typeOfParam = typeof param;

  if (typeOfParam !== "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeOfParam}.`
    );
    return;
  }

  let circArea = Math.PI * param * param;
  console.log(circArea.toFixed(2));
}

circleArea(5);
circleArea("name");
